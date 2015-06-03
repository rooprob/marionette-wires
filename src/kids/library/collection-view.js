import {CollectionView} from 'backbone.marionette';
import ItemView from './item-view';

export default CollectionView.extend({
  initialize: function() {
        console.log("Library View initialised");
  },
  className: 'kids__list',
  childView: ItemView,
  tagName: 'ul'

});
