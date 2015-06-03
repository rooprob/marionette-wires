import {Model} from 'backbone';

export default Model.extend({
  urlRoot: '/api/kids',
  isActive() {
    return this.collection.active === this;
  }
});
