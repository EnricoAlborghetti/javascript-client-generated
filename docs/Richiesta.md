# Visengine20.Richiesta

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**state** | **Number** |  | [optional] 
**hashVisura** | **String** |  | [optional] 
**nome** | **String** |  | [optional] 
**callback** | **String** |  | [optional] 
**ricerca** | **Boolean** |  | [optional] 
**idRicerca** | **String** |  | [optional] 
**prezzoVisura** | **Number** |  | [optional] 
**prezzoRicerca** | **Number** |  | [optional] 
**indiceRicerca** | **Number** |  | [optional] 
**statoRichiesta** | **String** |  | [optional] 
**emailTarget** | **String** |  | [optional] 
**allegati** | **[String]** |  | [optional] 
**timestampCreation** | **Number** |  | [optional] 
**timestampLastUpdate** | **Number** |  | [optional] 
**timestampStati** | [**TimestampStati**](TimestampStati.md) |  | [optional] 
**callbackData** | [**CallbackData**](CallbackData.md) |  | [optional] 
**opzioni** | [**[Opzione]**](Opzione.md) |  | [optional] 
**owner** | **String** |  | [optional] 
**sincrona** | **Boolean** |  | [optional] 
**ricerche** | [**[Ricerca]**](Ricerca.md) |  | [optional] 
**esito** | [**Esito**](Esito.md) |  | [optional] 

<a name="StatoRichiestaEnum"></a>
## Enum: StatoRichiestaEnum

* `inRicerca` (value: `"In ricerca"`)
* `inErogazione` (value: `"In erogazione"`)
* `datiDisponibili` (value: `"Dati disponibili"`)
* `visuraEvasa` (value: `"Visura evasa"`)
* `annullata` (value: `"Annullata"`)

