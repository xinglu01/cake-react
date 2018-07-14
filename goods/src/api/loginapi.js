import { LOGIN_DATA_URL } from '../server/';
import md5 from 'js-md5';

export default {
	loginfn(userID,password,cb){
		const pwd = md5(password)
		fetch(LOGIN_DATA_URL+'?status=login&userID='+userID+'&password='+ pwd)
				.then((res) => res.json())
				.then( (data)=> {cb(data)} )
				.catch( (err)=> {console.log(err)} )
	}
}
