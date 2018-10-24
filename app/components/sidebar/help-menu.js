import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  sidebar: service(),
  actions: {
    navigate(section) {
      this.get('sidebar').navigate(section);
    }
  }
});
