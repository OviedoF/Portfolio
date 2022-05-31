import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private _http: HttpClient) { }

  postForm(url: string, body: any):Observable<any>{
    return this._http.post(url, body)
  }
}
