// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import Client from '../Client';

export default class EC2Manager extends Client {
  constructor(options = {}) {
    super({
      rootUrl: 'https://taskcluster.net',
      serviceName: 'ec2-manager',
      serviceVersion: 'v1',
      exchangePrefix: '',
      ...options,
    });
    this.listWorkerTypes.entry = {type:'function',method:'get',route:'/worker-types',query:[],args:[],name:'listWorkerTypes',stability:'experimental',output:true}; // eslint-disable-line
    this.runInstance.entry = {type:'function',method:'put',route:'/worker-types/<workerType>/instance',query:[],args:['workerType'],name:'runInstance',stability:'experimental',scopes:[['ec2-manager:manage-resources:<workerType>']],input:true}; // eslint-disable-line
    this.terminateWorkerType.entry = {type:'function',method:'delete',route:'/worker-types/<workerType>/resources',query:[],args:['workerType'],name:'terminateWorkerType',stability:'experimental',scopes:[['ec2-manager:manage-resources:<workerType>']]}; // eslint-disable-line
    this.workerTypeStats.entry = {type:'function',method:'get',route:'/worker-types/<workerType>/stats',query:[],args:['workerType'],name:'workerTypeStats',stability:'experimental',output:true}; // eslint-disable-line
    this.workerTypeHealth.entry = {type:'function',method:'get',route:'/worker-types/<workerType>/health',query:[],args:['workerType'],name:'workerTypeHealth',stability:'experimental',output:true}; // eslint-disable-line
    this.workerTypeErrors.entry = {type:'function',method:'get',route:'/worker-types/<workerType>/errors',query:[],args:['workerType'],name:'workerTypeErrors',stability:'experimental',output:true}; // eslint-disable-line
    this.workerTypeState.entry = {type:'function',method:'get',route:'/worker-types/<workerType>/state',query:[],args:['workerType'],name:'workerTypeState',stability:'experimental',output:true}; // eslint-disable-line
    this.ensureKeyPair.entry = {type:'function',method:'get',route:'/key-pairs/<name>',query:[],args:['name'],name:'ensureKeyPair',stability:'experimental',scopes:[['ec2-manager:manage-key-pairs:<name>']],input:true}; // eslint-disable-line
    this.removeKeyPair.entry = {type:'function',method:'delete',route:'/key-pairs/<name>',query:[],args:['name'],name:'removeKeyPair',stability:'experimental',scopes:[['ec2-manager:manage-key-pairs:<name>']]}; // eslint-disable-line
    this.terminateInstance.entry = {type:'function',method:'delete',route:'/region/<region>/instance/<instanceId>',query:[],args:['region','instanceId'],name:'terminateInstance',stability:'experimental',scopes:[['ec2-manager:manage-instances:<region>:<instanceId>'],['ec2-manager:manage-resources:<workerType>']]}; // eslint-disable-line
    this.getPrices.entry = {type:'function',method:'get',route:'/prices',query:[],args:[],name:'getPrices',stability:'experimental',output:true}; // eslint-disable-line
    this.getSpecificPrices.entry = {type:'function',method:'post',route:'/prices',query:[],args:[],name:'getSpecificPrices',stability:'experimental',input:true,output:true}; // eslint-disable-line
    this.getHealth.entry = {type:'function',method:'get',route:'/health',query:[],args:[],name:'getHealth',stability:'experimental',output:true}; // eslint-disable-line
    this.getRecentErrors.entry = {type:'function',method:'get',route:'/errors',query:[],args:[],name:'getRecentErrors',stability:'experimental',output:true}; // eslint-disable-line
    this.regions.entry = {type:'function',method:'get',route:'/internal/regions',query:[],args:[],name:'regions',stability:'experimental',scopes:[['ec2-manager:internals']]}; // eslint-disable-line
    this.amiUsage.entry = {type:'function',method:'get',route:'/internal/ami-usage',query:[],args:[],name:'amiUsage',stability:'experimental',scopes:[['ec2-manager:internals']]}; // eslint-disable-line
    this.ebsUsage.entry = {type:'function',method:'get',route:'/internal/ebs-usage',query:[],args:[],name:'ebsUsage',stability:'experimental',scopes:[['ec2-manager:internals']]}; // eslint-disable-line
    this.dbpoolStats.entry = {type:'function',method:'get',route:'/internal/db-pool-stats',query:[],args:[],name:'dbpoolStats',stability:'experimental',scopes:[['ec2-manager:internals']]}; // eslint-disable-line
    this.allState.entry = {type:'function',method:'get',route:'/internal/all-state',query:[],args:[],name:'allState',stability:'experimental',scopes:[['ec2-manager:internals']]}; // eslint-disable-line
    this.sqsStats.entry = {type:'function',method:'get',route:'/internal/sqs-stats',query:[],args:[],name:'sqsStats',stability:'experimental',scopes:[['ec2-manager:internals']]}; // eslint-disable-line
    this.purgeQueues.entry = {type:'function',method:'get',route:'/internal/purge-queues',query:[],args:[],name:'purgeQueues',stability:'experimental',scopes:[['ec2-manager:internals']]}; // eslint-disable-line
    this.apiReference.entry = {type:'function',method:'get',route:'/internal/api-reference',query:[],args:[],name:'apiReference',stability:'experimental'}; // eslint-disable-line
    this.ping.entry = {type:'function',method:'get',route:'/ping',query:[],args:[],name:'ping',stability:'stable'}; // eslint-disable-line
  }
  /* eslint-disable max-len */
  // This method is only for debugging the ec2-manager
  /* eslint-enable max-len */
  listWorkerTypes(...args) {
    this.validate(this.listWorkerTypes.entry, args);

    return this.request(this.listWorkerTypes.entry, args);
  }
  /* eslint-disable max-len */
  // Request an instance of a worker type
  /* eslint-enable max-len */
  runInstance(...args) {
    this.validate(this.runInstance.entry, args);

    return this.request(this.runInstance.entry, args);
  }
  /* eslint-disable max-len */
  // Terminate all instances for this worker type
  /* eslint-enable max-len */
  terminateWorkerType(...args) {
    this.validate(this.terminateWorkerType.entry, args);

    return this.request(this.terminateWorkerType.entry, args);
  }
  /* eslint-disable max-len */
  // Return an object which has a generic state description. This only contains counts of instances
  /* eslint-enable max-len */
  workerTypeStats(...args) {
    this.validate(this.workerTypeStats.entry, args);

    return this.request(this.workerTypeStats.entry, args);
  }
  /* eslint-disable max-len */
  // Return a view of the health of a given worker type
  /* eslint-enable max-len */
  workerTypeHealth(...args) {
    this.validate(this.workerTypeHealth.entry, args);

    return this.request(this.workerTypeHealth.entry, args);
  }
  /* eslint-disable max-len */
  // Return a list of the most recent errors encountered by a worker type
  /* eslint-enable max-len */
  workerTypeErrors(...args) {
    this.validate(this.workerTypeErrors.entry, args);

    return this.request(this.workerTypeErrors.entry, args);
  }
  /* eslint-disable max-len */
  // Return state information for a given worker type
  /* eslint-enable max-len */
  workerTypeState(...args) {
    this.validate(this.workerTypeState.entry, args);

    return this.request(this.workerTypeState.entry, args);
  }
  /* eslint-disable max-len */
  // Idempotently ensure that a keypair of a given name exists
  /* eslint-enable max-len */
  ensureKeyPair(...args) {
    this.validate(this.ensureKeyPair.entry, args);

    return this.request(this.ensureKeyPair.entry, args);
  }
  /* eslint-disable max-len */
  // Ensure that a keypair of a given name does not exist.
  /* eslint-enable max-len */
  removeKeyPair(...args) {
    this.validate(this.removeKeyPair.entry, args);

    return this.request(this.removeKeyPair.entry, args);
  }
  /* eslint-disable max-len */
  // Terminate an instance in a specified region
  /* eslint-enable max-len */
  terminateInstance(...args) {
    this.validate(this.terminateInstance.entry, args);

    return this.request(this.terminateInstance.entry, args);
  }
  /* eslint-disable max-len */
  // Return a list of possible prices for EC2
  /* eslint-enable max-len */
  getPrices(...args) {
    this.validate(this.getPrices.entry, args);

    return this.request(this.getPrices.entry, args);
  }
  /* eslint-disable max-len */
  // Return a list of possible prices for EC2
  /* eslint-enable max-len */
  getSpecificPrices(...args) {
    this.validate(this.getSpecificPrices.entry, args);

    return this.request(this.getSpecificPrices.entry, args);
  }
  /* eslint-disable max-len */
  // Give some basic stats on the health of our EC2 account
  /* eslint-enable max-len */
  getHealth(...args) {
    this.validate(this.getHealth.entry, args);

    return this.request(this.getHealth.entry, args);
  }
  /* eslint-disable max-len */
  // Return a list of recent errors encountered
  /* eslint-enable max-len */
  getRecentErrors(...args) {
    this.validate(this.getRecentErrors.entry, args);

    return this.request(this.getRecentErrors.entry, args);
  }
  /* eslint-disable max-len */
  // This method is only for debugging the ec2-manager
  /* eslint-enable max-len */
  regions(...args) {
    this.validate(this.regions.entry, args);

    return this.request(this.regions.entry, args);
  }
  /* eslint-disable max-len */
  // List AMIs and their usage by returning a list of objects in the form:
  // {
  // region: string
  //   volumetype: string
  //   lastused: timestamp
  // }
  /* eslint-enable max-len */
  amiUsage(...args) {
    this.validate(this.amiUsage.entry, args);

    return this.request(this.amiUsage.entry, args);
  }
  /* eslint-disable max-len */
  // Lists current EBS volume usage by returning a list of objects
  // that are uniquely defined by {region, volumetype, state} in the form:
  // {
  // region: string,
  //   volumetype: string,
  //   state: string,
  //   totalcount: integer,
  //   totalgb: integer,
  //   touched: timestamp (last time that information was updated),
  // }
  /* eslint-enable max-len */
  ebsUsage(...args) {
    this.validate(this.ebsUsage.entry, args);

    return this.request(this.ebsUsage.entry, args);
  }
  /* eslint-disable max-len */
  // This method is only for debugging the ec2-manager
  /* eslint-enable max-len */
  dbpoolStats(...args) {
    this.validate(this.dbpoolStats.entry, args);

    return this.request(this.dbpoolStats.entry, args);
  }
  /* eslint-disable max-len */
  // This method is only for debugging the ec2-manager
  /* eslint-enable max-len */
  allState(...args) {
    this.validate(this.allState.entry, args);

    return this.request(this.allState.entry, args);
  }
  /* eslint-disable max-len */
  // This method is only for debugging the ec2-manager
  /* eslint-enable max-len */
  sqsStats(...args) {
    this.validate(this.sqsStats.entry, args);

    return this.request(this.sqsStats.entry, args);
  }
  /* eslint-disable max-len */
  // This method is only for debugging the ec2-manager
  /* eslint-enable max-len */
  purgeQueues(...args) {
    this.validate(this.purgeQueues.entry, args);

    return this.request(this.purgeQueues.entry, args);
  }
  /* eslint-disable max-len */
  // Generate an API reference for this service
  /* eslint-enable max-len */
  apiReference(...args) {
    this.validate(this.apiReference.entry, args);

    return this.request(this.apiReference.entry, args);
  }
  /* eslint-disable max-len */
  // Respond without doing anything.
  // This endpoint is used to check that the service is up.
  /* eslint-enable max-len */
  ping(...args) {
    this.validate(this.ping.entry, args);

    return this.request(this.ping.entry, args);
  }
}
