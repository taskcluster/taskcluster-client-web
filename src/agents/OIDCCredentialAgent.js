import Mutex from 'fast-mutex';
import fetch from '../fetch';

const MUTEX_LOCK_KEY = '@@TASKCLUSTER_SESSION';

/**
 * A credential agent that fetches the credentials from the taskcluster
 * login service, given an access_token.
 *
 * Users can keep a single such credential agent and use it simultaneously
 * with many Client instances.
 */
export default class OIDCCredentialAgent {
  constructor({ accessToken, oidcProvider }) {
    this._accessToken = accessToken;
    this.oidcProvider = oidcProvider;
  }

  // Update the access token, invalidating any cached credentials
  set accessToken(accessToken) {
    this._accessToken = accessToken;
    this.credentialsPromise = null;
  }

  get accessToken() {
    return this._accessToken;
  }

  async getCredentials() {
    if (this.credentialsPromise && this.credentialsExpire > new Date()) {
      return this.credentialsPromise;
    }

    // Call the oidcCredentials endpoint with the access token.
    const loginBaseUrl = 'https://login.taskcluster.net';
    const url = `${loginBaseUrl}/v1/oidc-credentials/${this.oidcProvider}`;
    const mutex = new Mutex();

    await mutex.lock(MUTEX_LOCK_KEY);

    const session = localStorage.getItem(MUTEX_LOCK_KEY);

    // If the session exists, it was set by the leader mutex. Grab the
    // credentials from storage and pass them on.
    if (session) {
      const response = JSON.parse(session);

      this.credentialsExpire = new Date(response.expires);
      this.credentialsPromise = Promise.resolve(response.credentials);
    } else {
      // With nothing in localStorage, we are the leader mutex, and will
      // be logging in for all other sessions. Make the request, set the
      // value in storage, then unlock the mutex for peers.
      // We will also blow away the session from storage in 30 seconds
      // as a recovery mechanism, and to also ensure that the next login
      // gets a clean slate.
      this.credentialsPromise = new Promise(async (resolve, reject) => {
        try {
          const response = await fetch(url, {
            headers: {
              Authorization: `Bearer ${this.accessToken}`
            }
          });

          this.credentialsExpire = new Date(response.expires);
          localStorage.setItem(MUTEX_LOCK_KEY, JSON.stringify(response));

          setTimeout(() => {
            localStorage.removeItem(MUTEX_LOCK_KEY);
          }, 30000);

          await mutex.release(MUTEX_LOCK_KEY);
          resolve(response.credentials);
        } catch (err) {
          this.credentialsPromise = null;
          reject(err);
        }
      });
    }

    return this.credentialsPromise;
  }
}
