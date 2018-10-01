angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.perfil', {
    url: '/profile',
    views: {
      'tab1': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

  .state('logIn', {
    url: '/Login',
    templateUrl: 'templates/logIn.html',
    controller: 'logInCtrl'
  })

  .state('singUp', {
    url: '/sing-up',
    templateUrl: 'templates/singUp.html',
    controller: 'singUpCtrl'
  })

  .state('cleanCash', {
    url: '/initial',
    templateUrl: 'templates/cleanCash.html',
    controller: 'cleanCashCtrl'
  })

  .state('aprende', {
    url: '/course',
    templateUrl: 'templates/aprende.html',
    controller: 'aprendeCtrl'
  })

  .state('tabsController.hazDinero', {
    url: '/recicla',
    views: {
      'tab2': {
        templateUrl: 'templates/hazDinero.html',
        controller: 'hazDineroCtrl'
      }
    }
  })

  .state('tabsController.caja', {
    url: '/box',
    views: {
      'tab2': {
        templateUrl: 'templates/caja.html',
        controller: 'cajaCtrl'
      }
    }
  })

  .state('tabsController.recolecciN', {
    url: '/recoleccion-user',
    views: {
      'tab2': {
        templateUrl: 'templates/recolecciN.html',
        controller: 'recolecciNCtrl'
      }
    }
  })

  .state('quHayParaRecoger', {
    url: '/recolector-schedule',
    templateUrl: 'templates/quHayParaRecoger.html',
    controller: 'quHayParaRecogerCtrl'
  })

  .state('dNdeEntrego', {
    url: '/puntos',
    templateUrl: 'templates/dNdeEntrego.html',
    controller: 'dNdeEntregoCtrl'
  })

  .state('canjearCreditos', {
    url: '/redime',
    templateUrl: 'templates/canjearCreditos.html',
    controller: 'canjearCreditosCtrl'
  })

  .state('tabsController.denuncia', {
    url: '/denuncia',
    views: {
      'tab3': {
        templateUrl: 'templates/denuncia.html',
        controller: 'denunciaCtrl'
      }
    }
  })

  .state('Denuncias', {
    url: '/registro-denuncias',
    templateUrl: 'templates/Denuncias.html',
    controller: 'DenunciasCtrl'
  })

  .state('donaciones', {
    url: '/donations',
    templateUrl: 'templates/donaciones.html',
    controller: 'donacionesCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('home', {
    url: '/page16',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

$urlRouterProvider.otherwise('/page16')


});