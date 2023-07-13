import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  register(formData:any):Observable<any>
  {
    return this.http.post('https://movies-api.routemisr.com/signup',formData)
  }

  login(formData:any):Observable<any>
  {
    return this.http.post('https://movies-api.routemisr.com/signin',formData)
  }


}
