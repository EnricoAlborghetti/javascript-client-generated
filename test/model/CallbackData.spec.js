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
    describe('CallbackData', function() {
      beforeEach(function() {
        instance = new Visengine20.CallbackData();
      });

      it('should create an instance of CallbackData', function() {
        // TODO: update the code to test CallbackData
        expect(instance).to.be.a(Visengine20.CallbackData);
      });

      it('should have the property method (base name: "method")', function() {
        // TODO: update the code to test the property method
        expect(instance).to.have.property('method');
        // expect(instance.method).to.be(expectedValueLiteral);
      });

      it('should have the property field (base name: "field")', function() {
        // TODO: update the code to test the property field
        expect(instance).to.have.property('field');
        // expect(instance.field).to.be(expectedValueLiteral);
      });

      it('should have the property url (base name: "url")', function() {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

      it('should have the property data (base name: "data")', function() {
        // TODO: update the code to test the property data
        expect(instance).to.have.property('data');
        // expect(instance.data).to.be(expectedValueLiteral);
      });

    });
  });

}));
