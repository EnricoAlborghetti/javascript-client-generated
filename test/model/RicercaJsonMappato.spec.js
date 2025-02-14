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
    describe('RicercaJsonMappato', function() {
      beforeEach(function() {
        instance = new Visengine20.RicercaJsonMappato();
      });

      it('should create an instance of RicercaJsonMappato', function() {
        // TODO: update the code to test RicercaJsonMappato
        expect(instance).to.be.a(Visengine20.RicercaJsonMappato);
      });

      it('should have the property field (base name: "field")', function() {
        // TODO: update the code to test the property field
        expect(instance).to.have.property('field');
        // expect(instance.field).to.be(expectedValueLiteral);
      });

    });
  });

}));
