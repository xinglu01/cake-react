import { CLASSIFY_LIST_URL , CLASSIFY_KIND_URL } from '../server/';
import FetchJsonp from 'fetch-jsonp';
import axios from 'axios';

export default {
	getData (cb) {
    axios.get(CLASSIFY_LIST_URL)
    	.then((res)=>{
    		cb(res)
      })
    	.catch((err)=>{
          console.log(err.status);
      })
  }	,
  
  getKindData (classID,callback) {
    FetchJsonp( CLASSIFY_KIND_URL+'?classID='+ classID ,{
                    jsonpCallback: 'callback',
                })
        .then((res) => {return res.json()})
        .then((data) => { callback(data) } )
        .catch((err) => {console.log(err)})
  }	
}

