
'use strict';

var should = require('should');


describe('ddata', function ( ) {
  // var cage = require('../lib/plugins/cannulaage')();
  var sandbox = require('../lib/sandbox')();
  var env = require('../env')();
  var ctx = {};
  ctx.ddata = require('../lib/data/ddata')();

  it('should be a module', function (done) {
    var libddata = require('../lib/data/ddata');
    // should.be.Function(libddata);
    var ddata = libddata( );
    should.exist(ddata);
    should.exist(libddata);
    should.exist(libddata.call);
    ddata = ctx.ddata.clone( );
    should.exist(ddata);
    done( );
  });

  it('has #clone( )', function (done) {
    should.exist(ctx.ddata.treatments);
    should.exist(ctx.ddata.sgvs);
    should.exist(ctx.ddata.mbgs);
    should.exist(ctx.ddata.cals);
    should.exist(ctx.ddata.profiles);
    should.exist(ctx.ddata.devicestatus);
    should.exist(ctx.ddata.lastUpdated);
    var ddata = ctx.ddata.clone( );
    should.exist(ddata);
    should.exist(ddata.treatments);
    should.exist(ddata.sgvs);
    should.exist(ddata.mbgs);
    should.exist(ddata.cals);
    should.exist(ddata.profiles);
    should.exist(ddata.devicestatus);
    should.exist(ddata.lastUpdated);
    done( );
  });

  it('has #split( )', function (done) {
    var date = new Date( );
    var time = date.getTime( );
    var cutoff = 1000 * 60 * 5;
    var max = 1000 * 60 * 60 * 24 * 2;
    var pieces = ctx.ddata.split(time, cutoff, max);
    should.exist(pieces);
    should.exist(pieces.first);
    should.exist(pieces.last);
    should.exist(pieces.rest);

    done( );
  });

  // TODO: ensure partition function gets called via:
  // Properties
  // * ddata.devicestatus
  // * ddata.mbgs
  // * ddata.sgvs
  // * ddata.treatments
  // * ddata.profiles
  // * ddata.lastUpdated
  // Methods
  // * ddata.processTreatments
  // * ddata.processDurations
  // * ddata.clone
  // * ddata.split
 

});
