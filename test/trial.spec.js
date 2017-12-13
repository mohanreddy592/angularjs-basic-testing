function add(x,y){
    return x + y;
}

describe('Add Functionality', function(){

    beforeEach(function(){
        console.log('inside beforeEach');
    });

    it('should add two values', function(){
        console.log('inside first it');
        var result = add(1,2);
        expect(result).toBe(3);
    });

    it('should give true', function(){
        console.log('inside second it');
        expect(true).toBe(true);
    });

});