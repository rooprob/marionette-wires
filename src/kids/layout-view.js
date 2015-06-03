import {LayoutView} from 'backbone.marionette';
import template from './layout-template.hbs';

export default LayoutView.extend({
  template: template,
  className: 'container',
  regions: {
    library : '.kids__library',
    viewer  : '.kids__viewer'
  }
});
