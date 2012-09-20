// Generated by CoffeeScript 1.3.3
(function() {
  var expect, profile, routes;

  expect = require('chai').expect;

  routes = require('../routes/index');

  profile = require('../routes/profile');

  describe('routes', function() {
    describe('index', function() {
      return it('should display the home page', function() {
        var req, res;
        req = null;
        res = {
          render: function(view, vars) {
            expect(view).to.equal('index');
            return expect(vars.title).to.equal('myLaddr Home');
          }
        };
        return routes.index(req, res);
      });
    });
    return describe('profile', function() {
      return it('should display the profile page', function() {
        var req, res;
        req = null;
        res = {
          render: function(view, vars) {
            expect(view).to.equal('profile');
            return expect(vars.title).to.equal('Profile');
          }
        };
        return profile.index(req, res);
      });
    });
  });

}).call(this);
