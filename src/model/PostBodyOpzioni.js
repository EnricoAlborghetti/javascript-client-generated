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

/**
 * The PostBodyOpzioni model module.
 * @module model/PostBodyOpzioni
 * @version 2.0.0
 */
export default class PostBodyOpzioni {
  /**
   * Constructs a new <code>PostBodyOpzioni</code>.
   * Consente di passare le opzioni se fornite nella &#x27;json_struttura&#x27; della &#x27;visura&#x27;
   * @alias module:model/PostBodyOpzioni
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PostBodyOpzioni</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostBodyOpzioni} obj Optional instance to populate.
   * @return {module:model/PostBodyOpzioni} The populated <code>PostBodyOpzioni</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostBodyOpzioni();
      if (data.hasOwnProperty('opzione_0'))
        obj.opzione0 = ApiClient.convertToType(data['opzione_0'], 'Boolean');
      if (data.hasOwnProperty('opzione_n'))
        obj.opzioneN = ApiClient.convertToType(data['opzione_n'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {Boolean} opzione0
 */
PostBodyOpzioni.prototype.opzione0 = undefined;

/**
 * @member {Boolean} opzioneN
 */
PostBodyOpzioni.prototype.opzioneN = undefined;

