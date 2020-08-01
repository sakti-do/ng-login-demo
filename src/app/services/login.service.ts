import { Injectable } from '@angular/core';
import { config } from '../util/config';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }
  userLogin(formData:FormGroup){
    return {data:{token:'asdad3432wdasdqeqwe@##$@sdsdfd'}};
    /** below code is for to get the token from api after auth validation */
    //let endpointUrl: string = config.apiEndPoint + 'user/login';
    //return this.httpClient.post(endpointUrl,formData.value).pipe( map( (response) => response ) );
  }
}
