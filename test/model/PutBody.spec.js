/*
 * Visengine 2.0
 * Questo servizio offre chiamate di rest per usufruire di tutta una serie di servizi camerali, catastali o di patronato legati a imprese e privati
 *
 * OpenAPI spec version: 2.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.59
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Visengine20);
  }
}(this, function(expect, Visengine20) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('PutBody', function() {
      beforeEach(function() {
        instance = new Visengine20.PutBody();
      });

      it('should create an instance of PutBody', function() {
        // TODO: update the code to test PutBody
        expect(instance).to.be.a(Visengine20.PutBody);
      });

      it('should have the property state (base name: "state")', function() {
        // TODO: update the code to test the property state
        expect(instance).to.have.property('state');
        // expect(instance.state).to.be(expectedValueLiteral);
      });

      it('should have the property jsonVisura (base name: "json_visura")', function() {
        // TODO: update the code to test the property jsonVisura
        expect(instance).to.have.property('jsonVisura');
        // expect(instance.jsonVisura).to.be(expectedValueLiteral);
      });

      it('should have the property jsonVisuraN (base name: "json_visura.$n")', function() {
        // TODO: update the code to test the property jsonVisuraN
        expect(instance).to.have.property('jsonVisuraN');
        // expect(instance.jsonVisuraN).to.be(expectedValueLiteral);
      });

      it('should have the property emailTarget (base name: "email_target")', function() {
        // TODO: update the code to test the property emailTarget
        expect(instance).to.have.property('emailTarget');
        // expect(instance.emailTarget).to.be(expectedValueLiteral);
      });

    });
  });

}));
