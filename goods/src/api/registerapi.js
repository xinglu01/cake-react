import { REGISTER_DATA_URL } from '../server/';
import md5 from 'js-md5';

export default {
	registerfn(userID,password,cb){
		const pwd = md5(password)
		fetch(REGISTER_DATA_URL+'?status=register&userID='+userID+'&password='+ pwd)
				.then((res) => res.json())
				.then( (data)=> {cb(data)} )
				.catch( (err)=> {console.log(err)} )
	}
}
