import Service from '@ember/service';

export default Service.extend({
  open: false,
  section: 'main',

  toggleOpen() {
    this.toggleProperty('open')
  },
  navigate(section) {
    this.set('section', section)
  },
});
