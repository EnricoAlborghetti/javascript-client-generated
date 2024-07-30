# Visengine20.DocumentoApi

All URIs are relative to *https://visengine2.altravia.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**documentoIdGet**](DocumentoApi.md#documentoIdGet) | **GET** /documento/{_id} | Documento generato dalla richiesta

<a name="documentoIdGet"></a>
# **documentoIdGet**
> InlineResponse2004 documentoIdGet(id)

Documento generato dalla richiesta

Permette di ottenere il documento relativo ad una specifica richiesta

### Example
```javascript
import {Visengine20} from 'visengine_20';
let defaultClient = Visengine20.ApiClient.instance;


let apiInstance = new Visengine20.DocumentoApi();
let id = "id_example"; // String | richiesta _id

apiInstance.documentoIdGet(id, (error, data, response) => {
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
 **id** | **String**| richiesta _id | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

