var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    // Arrange...
    var myArray = [1, 2, 3];
    var expectedResult = 0;

    // Act...
    var actualResult = myArray.indexOf(1);

    // Asserts...
    it('first test  - will not return -1 when the value is not present', function() {
      assert.strictEqual(actualResult, expectedResult, "Selvyn doh");
    });

    it('sync test - should return -1 when the value is not present', function() {
      assert.strictEqual(actualResult, expectedResult);
    });
    
    it('async test - should return -1 when the value is not present', function(done){
      assert.strictEqual(actualResult, expectedResult);
      done();
    });
  });
});