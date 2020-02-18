import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  url: 'https://gateway.marvel.com/v1/public/characters';

  constructor(
    private http: HttpClient,
    private params: HttpParams, // to be defined after key exposed
    private headers: HttpHeaders) { }

  getAllCharacters(): Observable<{}> {
    const body = { someInfo: 'bla' };
    const headers = this.headers.set('key', 'KEY-EXAMPLE');
    return this.http.get(this.url, { headers });
  }

}
