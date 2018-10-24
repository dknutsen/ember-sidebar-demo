import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';

export default Controller.extend({
  sidebar: service(),

  queryParams: ['sidebar.open', 'sidebar.section'],

  actions: {
    toggleSidebar() {
      this.get('sidebar').toggleOpen();
    }
  }
});
