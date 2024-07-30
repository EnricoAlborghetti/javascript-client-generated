# Visengine20.VisureApi

All URIs are relative to *https://visengine2.altravia.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**visureGet**](VisureApi.md#visureGet) | **GET** /visure | Elenco di tutti i servizi
[**visureHashVisuraGet**](VisureApi.md#visureHashVisuraGet) | **GET** /visure/{hash_visura} | Servizio identificato con hash_visura

<a name="visureGet"></a>
# **visureGet**
> InlineResponse200 visureGet()

Elenco di tutti i servizi

Per ogni elemento dell&#x27;elenco è importante &#x27;hash_visura&#x27;, che identifica il servizio

### Example
```javascript
import {Visengine20} from 'visengine_20';
let defaultClient = Visengine20.ApiClient.instance;


let apiInstance = new Visengine20.VisureApi();
apiInstance.visureGet((error, data, response) => {
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

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="visureHashVisuraGet"></a>
# **visureHashVisuraGet**
> InlineResponse2001 visureHashVisuraGet(hashVisura)

Servizio identificato con hash_visura

Descrizione del servizio con parametri di input, prezzi e istruzioni di convalida.  Per queste 4 visure: - Annuncio Certificato - 1a0a9d4ba06d2220ecce7da0228416ff - Planimetria Catastale - 4ff728695eab3ab9eaa6f58b22cd5734 - Fascicolo Casa - 48a2f2616f248bd5809092aae93af9aa - Durc Online - 3cbbb9c833f1c94af35494820cda3370  è importante scaricare il file di delega che dovrà poi essere caricato durante la fase di POST/richiesta. Il link per scaricare il file di delega è reperibile decodificando in base 64 il campo \&quot;istruzioni\&quot; dell&#x27;oggetto visura.

### Example
```javascript
import {Visengine20} from 'visengine_20';
let defaultClient = Visengine20.ApiClient.instance;


let apiInstance = new Visengine20.VisureApi();
let hashVisura = "hashVisura_example"; // String | hash_visura della visura da restituire

apiInstance.visureHashVisuraGet(hashVisura, (error, data, response) => {
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
 **hashVisura** | **String**| hash_visura della visura da restituire | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

