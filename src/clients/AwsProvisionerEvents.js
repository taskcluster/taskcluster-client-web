// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import Client from '../Client';

export default class AwsProvisionerEvents extends Client {
  constructor(options = {}) {
    super({
      serviceName: 'aws-provisioner',
      serviceVersion: 'v1',
      exchangePrefix: 'exchange/taskcluster-aws-provisioner/v1/',
      ...options,
    });
  }

  /* eslint-disable max-len */
  // When a new `workerType` is created a message will be published to this
  // exchange.
  /* eslint-enable max-len */
  workerTypeCreated(pattern) {
    const entry = {type:'topic-exchange',exchange:'worker-type-created',name:'workerTypeCreated',routingKey:[{name:'routingKeyKind',constant:'primary',multipleWords:false,required:true},{name:'workerType',multipleWords:false,required:true},{name:'reserved',multipleWords:true,required:false}],schema:'http://schemas.taskcluster.net/aws-provisioner/v1/worker-type-message.json#'}; // eslint-disable-line

    return this.normalizePattern(entry, pattern);
  }

  /* eslint-disable max-len */
  // When a `workerType` is updated a message will be published to this
  // exchange.
  /* eslint-enable max-len */
  workerTypeUpdated(pattern) {
    const entry = {type:'topic-exchange',exchange:'worker-type-updated',name:'workerTypeUpdated',routingKey:[{name:'routingKeyKind',constant:'primary',multipleWords:false,required:true},{name:'workerType',multipleWords:false,required:true},{name:'reserved',multipleWords:true,required:false}],schema:'http://schemas.taskcluster.net/aws-provisioner/v1/worker-type-message.json#'}; // eslint-disable-line

    return this.normalizePattern(entry, pattern);
  }

  /* eslint-disable max-len */
  // When a `workerType` is removed a message will be published to this
  // exchange.
  /* eslint-enable max-len */
  workerTypeRemoved(pattern) {
    const entry = {type:'topic-exchange',exchange:'worker-type-removed',name:'workerTypeRemoved',routingKey:[{name:'routingKeyKind',constant:'primary',multipleWords:false,required:true},{name:'workerType',multipleWords:false,required:true},{name:'reserved',multipleWords:true,required:false}],schema:'http://schemas.taskcluster.net/aws-provisioner/v1/worker-type-message.json#'}; // eslint-disable-line

    return this.normalizePattern(entry, pattern);
  }
}
