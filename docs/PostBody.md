# Visengine20.PostBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **Number** | Per impostazione predefinita è 1, se si passa 0 la transazione viene solo inizializzata e rimane aperta con la possibilità di modificare i campi attraverso la Put | [optional] 
**test** | **Boolean** | Se viene passato a true, simula la validazione dei dati e restituisce anche i prezzi del servizio | [optional] 
**hashVisura** | **String** | Identificazione del servizio richiesto | [optional] 
**jsonVisura** | [**JsonVisura**](JsonVisura.md) |  | [optional] 
**callbackData** | [**CallbackData**](CallbackData.md) |  | [optional] 
**emailTarget** | **String** | Permette di ricevere il documento di servizio richiesto direttamente via e-mail una volta che il servizio è stato elaborato | [optional] 
**opzioni** | [**PostBodyOpzioni**](PostBodyOpzioni.md) |  | [optional] 

<a name="StateEnum"></a>
## Enum: StateEnum

* `_0` (value: `0`)
* `_1` (value: `1`)

