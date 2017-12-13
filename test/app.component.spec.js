describe('app component', function(){
    var ctrl;
    beforeEach(module('myapp'));

    beforeEach(function(){

        inject(function($componentController){
            ctrl = $componentController('app');
        });

    });

    it('should have name property set', function(){
        expect(ctrl.name).toBe('app');
    });



});