/**
 * Created by xjweng on 2019/4/26.
 */
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, map} from "rxjs/internal/operators";
import {forkJoin as throwError } from 'rxjs';
@Injectable()
export class HttpClientService {
  constructor(private http: HttpClient) {
  }
  get(url:string, params = {}) {
    let query = this.handleGetParams(params);
    url = url + query;
    return this.http.get(url).pipe(
      map(this.extractData,
      catchError(this.handleError))
    );
  }
  handleError(error: HttpErrorResponse) {
    let errMsg: string;
    if (error.error instanceof ErrorEvent) {
      errMsg = 'An error occurred:', error.error.message;
    } else {
      errMsg = `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`;
    }
    return throwError(errMsg);
  }

  extractData(body) {
    if (body) {
      if (JSON.stringify(body) === '{}') return true;
      return (body === false) ? false : (body===0?0:(body||true));
    }
    else {
      return false;
    }
  }

  handleGetParams(params): string {
    let queryString = '';
    for (let i in params) {
      if (params[i] != null) {
        queryString += '&' + i + '=' + params[i];
      }
    }
    let exp = /^&/;
    queryString = queryString.length > 0 ? queryString.replace(exp, '?') : '';
    return queryString;
  }
}
