angular.module('myapp')
    .service('ProductService', function(){

        this.add = function(x, y){
            return x + y;
        };

        this.subtract = function(x,y){
            return x - y;
        };
        
    });