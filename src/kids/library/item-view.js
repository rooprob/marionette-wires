import {ItemView} from 'backbone.marionette';
import template from './item-template.hbs';

export default ItemView.extend({

  initialize: function() {
        console.log("ItemView initialised");
  },
  template: template,
  tagName: 'li',

  attributes() {
    return {
      class : `kids__list ${(this.model.isActive() ? 'active' : '')}`,
      href  : `#kids/${this.model.get('id')}`
    };
  }
});
