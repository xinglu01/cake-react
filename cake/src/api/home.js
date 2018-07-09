import { HOME_LIST_URL } from '../server/'

export default {
	getData (goodsID,callback) {
    FetchJsonp( HOME_LIST_URL+'?goodsID='+ goodsID ,{
                    jsonpCallback: 'callback',
                })
        .then((res) => {return res.json()})
        .then((data) => { callback(data) } )
        .catch((err) => {console.log(err)})
  }	
}
