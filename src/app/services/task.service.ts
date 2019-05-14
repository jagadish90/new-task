import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { signup } from '../model/signup';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url = "http://localhost:4600/";
  apiUrl="http://localhost:4600/login";
  apiUrll="http://localhost:4600/login/clientid";
  reg="http://localhost:4600/register"

  constructor(private ht: HttpClient) { }
  CheckLogin(ci: string, p: string): Observable<any> {
    return this.ht.get('http://localhost:4600/login' + '/'+ ci + '/' + p, { responseType: 'json' });
  }

  getProfile(i):Observable<any>{
    return this.ht.get("http://localhost:4600/login"+'/'+i,{responseType:'json'})
  }
  update(profile):Observable<any>{
    const headers={
      headers:new HttpHeaders ({'content-type':'appliction/json'})
    }
    return this.ht.put(this.apiUrl,JSON.stringify(profile),headers)
  }
  postotp(id,otp):Observable<any>{
    const headers={
      headers:new HttpHeaders ({'content-type':'appliction/json'})
    }
    return this.ht.post(this.url + "postotp/" + otp +"/"+ id ,headers)
  }
  getledger(id):Observable<any>{
    return this.ht.get(this.url+"getledger/" + id,{responseType:'json'})
  }

  
  registermember(rp:signup){
    const httpOptions={
      headers:new HttpHeaders({'Content-Type':'application/json'})
    }
    return this.ht.post(this.reg,JSON.stringify(rp),httpOptions)
    
    }
  
}
