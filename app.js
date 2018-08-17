let app = angular.module("routingshowcase", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    // An array of state definitions
    var states = [
      { 
        name: 'hello', 
        url: '/hello', 
        component: 'hello'  
      },
      { 
        name: 'about', 
        url: '/about', 
        component: 'about'
      },
      { 
        name: 'photos', 
        url: '/photos', 
        component: 'photos'
      }
    ];
    
    // Loop over the state definitions and register them
    states.forEach(function(state) {
      $stateProvider.state(state);
    });
    // Set default state
    $urlRouterProvider.otherwise("/hello");
  });

app.component('routingexample', {
    template: `
    <a ui-sref="hello" ui-sref-active="active">Hello</a>
    <a ui-sref="about" ui-sref-active="active">About</a>
    <a ui-sref="photos" ui-sref-active="active">Photos</a>
    <ui-view></ui-view>
    `,
    controller: function() {

    }
});