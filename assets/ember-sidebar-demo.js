'use strict';



;define('ember-sidebar-demo/app', ['exports', 'ember-sidebar-demo/resolver', 'ember-load-initializers', 'ember-sidebar-demo/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('ember-sidebar-demo/components/sidebar-content', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    sidebar: Ember.inject.service(),
    actions: {
      navigate(section) {
        this.get('sidebar').navigate(section);
      }
    }
  });
});
;define('ember-sidebar-demo/components/sidebar/help-menu', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    sidebar: Ember.inject.service(),
    actions: {
      navigate(section) {
        this.get('sidebar').navigate(section);
      }
    }
  });
});
;define('ember-sidebar-demo/components/sidebar/links-menu', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    sidebar: Ember.inject.service(),
    actions: {
      navigate(section) {
        this.get('sidebar').navigate(section);
      }
    }
  });
});
;define('ember-sidebar-demo/components/sidebar/main', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    sidebar: Ember.inject.service(),
    actions: {
      navigate(section) {
        this.get('sidebar').navigate(section);
      }
    }
  });
});
;define('ember-sidebar-demo/components/sidebar/super-menu', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    sidebar: Ember.inject.service(),
    actions: {
      navigate(section) {
        this.get('sidebar').navigate(section);
      }
    }
  });
});
;define('ember-sidebar-demo/components/sidebar/support-menu', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    sidebar: Ember.inject.service(),
    actions: {
      navigate(section) {
        this.get('sidebar').navigate(section);
      }
    }
  });
});
;define('ember-sidebar-demo/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('ember-sidebar-demo/controllers/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    sidebar: Ember.inject.service(),

    queryParams: ['sidebar.open', 'sidebar.section'],

    actions: {
      toggleSidebar() {
        this.get('sidebar').toggleOpen();
      }
    }
  });
});
;define('ember-sidebar-demo/helpers/app-version', ['exports', 'ember-sidebar-demo/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('ember-sidebar-demo/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('ember-sidebar-demo/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('ember-sidebar-demo/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-sidebar-demo/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('ember-sidebar-demo/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('ember-sidebar-demo/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('ember-sidebar-demo/initializers/export-application-global', ['exports', 'ember-sidebar-demo/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define('ember-sidebar-demo/instance-initializers/ember-data', ['exports', 'ember-data/initialize-store-service'], function (exports, _initializeStoreService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
});
;define('ember-sidebar-demo/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('ember-sidebar-demo/router', ['exports', 'ember-sidebar-demo/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('index', { path: '/' });
    this.route('dashboard', function () {
      this.route('thing', function () {
        this.route('subthing');
      });
    });
  });

  exports.default = Router;
});
;define('ember-sidebar-demo/routes/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('ember-sidebar-demo/routes/dashboard', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('ember-sidebar-demo/routes/dashboard/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('ember-sidebar-demo/routes/dashboard/thing/subthing', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('ember-sidebar-demo/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('ember-sidebar-demo/routes/thing', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('ember-sidebar-demo/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define('ember-sidebar-demo/services/sidebar', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    open: false,
    section: 'main',

    toggleOpen() {
      this.toggleProperty('open');
    },
    navigate(section) {
      this.set('section', section);
    }
  });
});
;define("ember-sidebar-demo/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "XJpp/GLQ", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"style\",\"display:flex;min-height:40rem;width:100%\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"sidebar\",\"open\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"style\",\"min-height:40rem;height:100%;width:10rem;border:1px solid lightgrey\"],[9],[0,\"\\n        \"],[1,[21,\"sidebar-content\"],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[7,\"div\"],[11,\"style\",\"flex:1;height:100%;display:flex;flex-direction:column\"],[9],[0,\"\\n\"],[0,\"      \"],[7,\"div\"],[11,\"style\",\"width:100%;height:2rem;background:lightgrey;display:flex;justify-content:space-between;align-items:center\"],[9],[0,\"\\n        \"],[7,\"button\"],[3,\"action\",[[22,0,[]],\"toggleSidebar\"]],[9],[0,\"Hamburger\"],[10],[0,\"\\n        \"],[7,\"div\"],[9],[0,\"Awesome Brand\"],[10],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[1,[21,\"outlet\"],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-sidebar-demo/templates/application.hbs" } });
});
;define("ember-sidebar-demo/templates/components/sidebar-content", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5f2tlY6N", "block": "{\"symbols\":[],\"statements\":[[1,[27,\"component\",[[27,\"concat\",[\"sidebar/\",[23,[\"sidebar\",\"section\"]]],null]],null],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-sidebar-demo/templates/components/sidebar-content.hbs" } });
});
;define("ember-sidebar-demo/templates/components/sidebar/help-menu", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "HI1r2ma2", "block": "{\"symbols\":[],\"statements\":[[7,\"a\"],[11,\"style\",\"padding:1rem;color:blue\"],[3,\"action\",[[22,0,[]],\"navigate\",\"main\"]],[9],[0,\"Back\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[9],[0,\"Help content here!\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-sidebar-demo/templates/components/sidebar/help-menu.hbs" } });
});
;define("ember-sidebar-demo/templates/components/sidebar/links-menu", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "HgjlnDSO", "block": "{\"symbols\":[],\"statements\":[[7,\"a\"],[11,\"style\",\"padding:1rem;color:blue\"],[3,\"action\",[[22,0,[]],\"navigate\",\"main\"]],[9],[0,\"Back\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[9],[0,\"Links content here!\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-sidebar-demo/templates/components/sidebar/links-menu.hbs" } });
});
;define("ember-sidebar-demo/templates/components/sidebar/main", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "vplCUorH", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"style\",\"display:flex;flex-direction:column\"],[9],[0,\"\\n  \"],[7,\"a\"],[11,\"style\",\"padding:1rem;color:blue\"],[3,\"action\",[[22,0,[]],\"navigate\",\"help-menu\"]],[9],[0,\"Help\"],[10],[0,\"\\n  \"],[7,\"a\"],[11,\"style\",\"padding:1rem;color:blue\"],[3,\"action\",[[22,0,[]],\"navigate\",\"links-menu\"]],[9],[0,\"Links\"],[10],[0,\"\\n  \"],[7,\"a\"],[11,\"style\",\"padding:1rem;color:blue\"],[3,\"action\",[[22,0,[]],\"navigate\",\"super-menu\"]],[9],[0,\"Super\"],[10],[0,\"\\n  \"],[7,\"a\"],[11,\"style\",\"padding:1rem;color:blue\"],[3,\"action\",[[22,0,[]],\"navigate\",\"support-menu\"]],[9],[0,\"Support\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-sidebar-demo/templates/components/sidebar/main.hbs" } });
});
;define("ember-sidebar-demo/templates/components/sidebar/super-menu", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4p8N79oF", "block": "{\"symbols\":[],\"statements\":[[7,\"a\"],[11,\"style\",\"padding:1rem;color:blue\"],[3,\"action\",[[22,0,[]],\"navigate\",\"main\"]],[9],[0,\"Back\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[9],[0,\"Super content here!\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-sidebar-demo/templates/components/sidebar/super-menu.hbs" } });
});
;define("ember-sidebar-demo/templates/components/sidebar/support-menu", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3lyA+x9H", "block": "{\"symbols\":[],\"statements\":[[7,\"a\"],[11,\"style\",\"padding:1rem;color:blue\"],[3,\"action\",[[22,0,[]],\"navigate\",\"main\"]],[9],[0,\"Back\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[9],[0,\"Support content here!\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-sidebar-demo/templates/components/sidebar/support-menu.hbs" } });
});
;define("ember-sidebar-demo/templates/dashboard", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "V4VrmMKo", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"Whatup this is the dashboard\"],[10],[0,\"\\n\\n\"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[0,\"Go back to main\"]],\"parameters\":[]},null],[0,\"\\n\\n\"],[7,\"div\"],[11,\"style\",\"padding-left:4rem;padding-top:4rem;border:1px solid grey\"],[9],[0,\"\\n  \"],[1,[21,\"outlet\"],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-sidebar-demo/templates/dashboard.hbs" } });
});
;define("ember-sidebar-demo/templates/dashboard/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "E1Dso56r", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\\n\"],[4,\"link-to\",[\"dashboard.thing\"],null,{\"statements\":[[0,\"Go to a thing\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-sidebar-demo/templates/dashboard/index.hbs" } });
});
;define("ember-sidebar-demo/templates/dashboard/thing", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "TYSUtz/W", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"Yo this is a thing\"],[10],[0,\"\\n\\n\"],[4,\"link-to\",[\"dashboard.thing.subthing\"],null,{\"statements\":[[0,\"Click here to load more content about this thing down below\"]],\"parameters\":[]},null],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-sidebar-demo/templates/dashboard/thing.hbs" } });
});
;define("ember-sidebar-demo/templates/dashboard/thing/subthing", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Mx4ROqy6", "block": "{\"symbols\":[],\"statements\":[[7,\"p\"],[9],[0,\"HERE IS SOME CONTENT RELATED TO THE THING\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-sidebar-demo/templates/dashboard/thing/subthing.hbs" } });
});
;define("ember-sidebar-demo/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "N7rq8j8h", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"Hello this is the main index page\"],[10],[0,\"\\n\\n\"],[4,\"link-to\",[\"dashboard\"],null,{\"statements\":[[0,\"Go to dashboard\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-sidebar-demo/templates/index.hbs" } });
});
;

;define('ember-sidebar-demo/config/environment', [], function() {
  var prefix = 'ember-sidebar-demo';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("ember-sidebar-demo/app")["default"].create({"name":"ember-sidebar-demo","version":"0.0.0+34a85747"});
          }
        
//# sourceMappingURL=ember-sidebar-demo.map
