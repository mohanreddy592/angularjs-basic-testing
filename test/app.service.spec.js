describe('ProductService', function(){
    var ProductService;
    beforeEach(module('myapp'));

    beforeEach(function(){
        console.log('inside product service');
        inject(function(_ProductService_){
            ProductService = _ProductService_;
        });

    });

    describe('add', function(){

        it('should add two numbers', function(){
            var result = ProductService.add(1,2);
            expect(result).toBe(3);
        });

    });

});