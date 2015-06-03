import {Route} from 'backbone-routing';
import {history} from 'backbone';
import storage from '../storage';

export default Route.extend({
  fetch() {
    return storage.findAll().then(collection => {
      this.collection = collection;
    });
  },

  onEnter() {
    var id = this.collection.first().get('id');
    history.navigate(`kids/${id}`, {
      trigger: true,
      replace: true
    });
  }
});
