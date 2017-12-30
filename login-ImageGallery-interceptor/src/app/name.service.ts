import { Injectable } from '@angular/core';
import {nameL} from './nameList';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class NameService {
  constructor(private http: HttpClient){}


  getnames(start, limit)
  {
    const url = 'https://jsonplaceholder.typicode.com/comments?_start='+start+'&'+'_limit='+limit ;
    return this.http.get<nameL[]>(url); 
  
  }
}






