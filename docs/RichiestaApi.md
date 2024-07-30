# Visengine20.RichiestaApi

All URIs are relative to *https://visengine2.altravia.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**richiestaGet**](RichiestaApi.md#richiestaGet) | **GET** /richiesta | Elenco di tutte le richieste
[**richiestaIdGet**](RichiestaApi.md#richiestaIdGet) | **GET** /richiesta/{_id} | Trova la richiesta per _id
[**richiestaIdPost**](RichiestaApi.md#richiestaIdPost) | **POST** /richiesta/{_id} | Aggiungere una ricerca alla richiesta
[**richiestaIdPut**](RichiestaApi.md#richiestaIdPut) | **PUT** /richiesta/{_id} | Aggiorna la richiesta
[**richiestaIdRicerchePut**](RichiestaApi.md#richiestaIdRicerchePut) | **PUT** /richiesta/{_id}/ricerche | Aggiorna la richiesta con l&#x27;indice e la ricerca prescelti
[**richiestaPost**](RichiestaApi.md#richiestaPost) | **POST** /richiesta | Creare una richiesta

<a name="richiestaGet"></a>
# **richiestaGet**
> InlineResponse2002 richiestaGet()

Elenco di tutte le richieste

Elenco sintetico di tutte le richieste effettuate dal proprio profilo

### Example
```javascript
import {Visengine20} from 'visengine_20';
let defaultClient = Visengine20.ApiClient.instance;


let apiInstance = new Visengine20.RichiestaApi();
apiInstance.richiestaGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="richiestaIdGet"></a>
# **richiestaIdGet**
> InlineResponse2003 richiestaIdGet(id)

Trova la richiesta per _id

Servizio che restituisce la richiesta contrassegnata dall&#x27;identificatore passato nel percorso

### Example
```javascript
import {Visengine20} from 'visengine_20';
let defaultClient = Visengine20.ApiClient.instance;


let apiInstance = new Visengine20.RichiestaApi();
let id = "id_example"; // String | _id della richiesta da restituire

apiInstance.richiestaIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| _id della richiesta da restituire | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="richiestaIdPost"></a>
# **richiestaIdPost**
> InlineResponse2003 richiestaIdPost(body, id)

Aggiungere una ricerca alla richiesta

I servizi che hanno il parametro &#x27;ricerca&#x27; : 1 consentono di aggiungere ulteriori ricerche alla prima richiesta di servizio

### Example
```javascript
import {Visengine20} from 'visengine_20';
let defaultClient = Visengine20.ApiClient.instance;


let apiInstance = new Visengine20.RichiestaApi();
let body = new Visengine20.PostBodyId(); // PostBodyId | 
let id = "id_example"; // String | _id della richiesta a cui aggiungere una ricerca

apiInstance.richiestaIdPost(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostBodyId**](PostBodyId.md)|  | 
 **id** | **String**| _id della richiesta a cui aggiungere una ricerca | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="richiestaIdPut"></a>
# **richiestaIdPut**
> InlineResponse2003 richiestaIdPut(body, id)

Aggiorna la richiesta

Questa chiamata consente di aggiornare i campi di ricerca della richiesta e di chiudere la transazione

### Example
```javascript
import {Visengine20} from 'visengine_20';
let defaultClient = Visengine20.ApiClient.instance;


let apiInstance = new Visengine20.RichiestaApi();
let body = new Visengine20.PutBody(); // PutBody | 
let id = "id_example"; // String | richiesta _id

apiInstance.richiestaIdPut(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PutBody**](PutBody.md)|  | 
 **id** | **String**| richiesta _id | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="richiestaIdRicerchePut"></a>
# **richiestaIdRicerchePut**
> InlineResponse2003 richiestaIdRicerchePut(body, id)

Aggiorna la richiesta con l&#x27;indice e la ricerca prescelti

Nei servizi con &#x27;ricerca&#x27;: 1 il documento finale viene rilasciato al momento della scelta del risultato di ricerca

### Example
```javascript
import {Visengine20} from 'visengine_20';
let defaultClient = Visengine20.ApiClient.instance;


let apiInstance = new Visengine20.RichiestaApi();
let body = new Visengine20.PutBodySearch(); // PutBodySearch | 
let id = "id_example"; // String | richiesta _id

apiInstance.richiestaIdRicerchePut(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PutBodySearch**](PutBodySearch.md)|  | 
 **id** | **String**| richiesta _id | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="richiestaPost"></a>
# **richiestaPost**
> InlineResponse2003 richiestaPost(body)

Creare una richiesta

Chiamata per istanziare una nuova richiesta di servizio. Possibilità di crearla immediatamente completa o, attraverso la transazionalità, di finirla di completare con una put

### Example
```javascript
import {Visengine20} from 'visengine_20';
let defaultClient = Visengine20.ApiClient.instance;


let apiInstance = new Visengine20.RichiestaApi();
let body = new Visengine20.PostBody(); // PostBody | 

apiInstance.richiestaPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostBody**](PostBody.md)|  | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

