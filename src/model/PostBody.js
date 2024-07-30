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
import CallbackData from './CallbackData';
import JsonVisura from './JsonVisura';
import PostBodyOpzioni from './PostBodyOpzioni';

/**
 * The PostBody model module.
 * @module model/PostBody
 * @version 2.0.0
 */
export default class PostBody {
  /**
   * Constructs a new <code>PostBody</code>.
   * @alias module:model/PostBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PostBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostBody} obj Optional instance to populate.
   * @return {module:model/PostBody} The populated <code>PostBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostBody();
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'Number');
      if (data.hasOwnProperty('test'))
        obj.test = ApiClient.convertToType(data['test'], 'Boolean');
      if (data.hasOwnProperty('hash_visura'))
        obj.hashVisura = ApiClient.convertToType(data['hash_visura'], 'String');
      if (data.hasOwnProperty('json_visura'))
        obj.jsonVisura = JsonVisura.constructFromObject(data['json_visura']);
      if (data.hasOwnProperty('callback_data'))
        obj.callbackData = CallbackData.constructFromObject(data['callback_data']);
      if (data.hasOwnProperty('email_target'))
        obj.emailTarget = ApiClient.convertToType(data['email_target'], 'String');
      if (data.hasOwnProperty('opzioni'))
        obj.opzioni = PostBodyOpzioni.constructFromObject(data['opzioni']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>state</code> property.
 * @enum {Number}
 * @readonly
 */
PostBody.StateEnum = {
  /**
   * value: 0
   * @const
   */
  _0: 0,

  /**
   * value: 1
   * @const
   */
  _1: 1
};
/**
 * Per impostazione predefinita è 1, se si passa 0 la transazione viene solo inizializzata e rimane aperta con la possibilità di modificare i campi attraverso la Put
 * @member {module:model/PostBody.StateEnum} state
 */
PostBody.prototype.state = undefined;

/**
 * Se viene passato a true, simula la validazione dei dati e restituisce anche i prezzi del servizio
 * @member {Boolean} test
 */
PostBody.prototype.test = undefined;

/**
 * Identificazione del servizio richiesto
 * @member {String} hashVisura
 */
PostBody.prototype.hashVisura = undefined;

/**
 * @member {module:model/JsonVisura} jsonVisura
 */
PostBody.prototype.jsonVisura = undefined;

/**
 * @member {module:model/CallbackData} callbackData
 */
PostBody.prototype.callbackData = undefined;

/**
 * Permette di ricevere il documento di servizio richiesto direttamente via e-mail una volta che il servizio è stato elaborato
 * @member {String} emailTarget
 */
PostBody.prototype.emailTarget = undefined;

/**
 * @member {module:model/PostBodyOpzioni} opzioni
 */
PostBody.prototype.opzioni = undefined;

