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
import ApiClient from '../ApiClient';
import Richiesta from './Richiesta';

/**
 * The InlineResponse2003 model module.
 * @module model/InlineResponse2003
 * @version 2.0.0
 */
export default class InlineResponse2003 {
  /**
   * Constructs a new <code>InlineResponse2003</code>.
   * @alias module:model/InlineResponse2003
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse2003</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2003} obj Optional instance to populate.
   * @return {module:model/InlineResponse2003} The populated <code>InlineResponse2003</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2003();
      if (data.hasOwnProperty('data'))
        obj.data = Richiesta.constructFromObject(data['data']);
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('error'))
        obj.error = ApiClient.convertToType(data['error'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {module:model/Richiesta} data
 */
InlineResponse2003.prototype.data = undefined;

/**
 * @member {Boolean} success
 */
InlineResponse2003.prototype.success = undefined;

/**
 * @member {String} message
 */
InlineResponse2003.prototype.message = undefined;

/**
 * @member {Number} error
 */
InlineResponse2003.prototype.error = undefined;

