
describe('pageA', function () {
  // require source module
  var pageA = require('../src/components/pageA.vue');
  it('should have a ready hook', function () {
    expect(typeof pageA.ready).toBe('function')
  })
  it('should set correct default data', function () {
    expect(typeof pageA.data).toBe('function')
    var defaultData = pageA.data()
    expect(defaultData.msg).toBe('yes page A')
  })
  it('set method cheeck', function() {
    expect(typeof pageA.methods.getJson).toBe('function')
  })
})


describe('pageA.methods.getJson', function () {
  // require source module
  var pageA = require('../src/components/pageA.vue');
  var pageAThis = {$data:{}};
  beforeEach(function(done){
     pageAThis.$data = pageA.data();
    //  console.log(pageAThis);
    pageA.methods.getJson.call(pageAThis,done);
  })
  it('pageA.methods.getJson result', function() {
    // console.log(pageAThis);
    expect(typeof pageAThis.$data.items).toBe('object')
  })
})
