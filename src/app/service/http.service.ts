import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) {}

  baseUrl:string = "http://localhost:3000/"
  httpHeaders:HttpHeaders = new HttpHeaders({
    "content-type":"application/json"
  })

  getDataFromServer(endpoint:string):Observable<any>{
    const url = this.baseUrl + endpoint
    return this.httpClient.get(url,{headers:this.httpHeaders})
  }

}
