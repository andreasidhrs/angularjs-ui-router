angular.module('routingshowcase').component('person', {
    bindings: { person: '<' },
    template:  '<p>Got person: {{ person }}</p>'
})