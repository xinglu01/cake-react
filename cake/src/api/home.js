import { HOME_LIST_URL } from '../server/'

export default {
	getData (goodsID,callback) {
    FetchJsonp( HOME_LIST_URL+'?goodsID='+ goodsID ,{
                    jsonpCallbackFunction: 'portraitCallBack'
                })
        .then((res) => {return res.json()})
        .then((data) => { callback(data) } )
        .catch((err) => {console.log(err)})
  }	
}
