import {Router} from 'backbone-routing';
import HeaderService from '../header/service';
import LayoutView from './layout-view';
import IndexRoute from './index/route';
import ShowRoute from './show/route';

export default Router.extend({
  initialize(options = {}) {
    this.container = options.container;

    HeaderService.request('add', {
      name: 'Kids',
      path: 'kids',
      type: 'primary'
    });
  },

  onBeforeEnter() {
    this.layout = new LayoutView();
    this.container.show(this.layout);
    HeaderService.request('activate', {
      path: 'kids'
    });
  },

  routes: {
    'kids'     : 'index',
    'kids/:id' : 'show'
  },

  index() {
    return new IndexRoute();
  },

  show() {
    return new ShowRoute({
      layout: this.layout
    });
  }
});
