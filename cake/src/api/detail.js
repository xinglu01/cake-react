import { DETAIL_DATA_URL } from '../server/'
import FetchJsonp from 'fetch-jsonp';

export default {
	getData (id,callback) {
    FetchJsonp( DETAIL_DATA_URL+'?goodsID='+ id ,{
                    jsonpCallback: 'callback',
                })
        .then((res) => {return res.json()})
        .then((data) => { callback(data) } )
        .catch((err) => {console.log(err)})
  }	
}
