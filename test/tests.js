describe('view', function () {
  var assert = require('assert')
    , view = require('view');

  it('should return a constructor', function () {
    var View = view('<div></div>');
    assert('function' === typeof View);
  });

  it('should expose its template', function () {
    var template = '<div></div>';
    var View = view(template);
    assert(template === View.template);
  });
});

describe('View', function () {
  var assert = require('assert')
    , view = require('view');

  var View = view('<div></div>');

  describe('#emitter', function () {
    it('should have emitter methods', function () {
      var view = new View();
      assert(view.emit);
      assert(view.on);
      assert(view.once);
      assert(view.off);
    });
  });

  describe('#model', function () {
    it('should copy over its model', function () {
      var model = {};
      var view = new View(model);
      assert(model === view.model);
    });
  });

  describe('#el', function () {
    it('should create its el', function () {
      var view = new View();
      assert(view.el);
      assert('DIV' === view.el.nodeName);
    });

    it('should accept an existing el', function () {
      var div = document.createElement('div');
      var view = new View(null, div);
      assert(div === view.el);
    });

    it('should have a model override', function () {
      var div = document.createElement('div');
      var view = new View(div);
      assert(div === view.el);
    });
  });

  describe('#options', function () {
    it('should copy over its options', function () {
      var options = {};
      var view = new View(null, null, options);
      assert(options === view.options);
    });

    it('should have an el override', function () {
      var options = {};
      var view = new View(null, options);
      assert(options === view.options);
    });
  });

  describe('#addClass', function () {
    it('should add a class to the el', function () {
      var view = new View();
      view.addClass('name');
      assert(view.el.classList.contains('name'));
    });
  });

  describe('#removeClass', function () {
    it('should remove a class from the el', function () {
      var view = new View();
      view.addClass('name');
      view.removeClass('name');
      assert(!view.el.classList.contains('name'));
    });
  });
});