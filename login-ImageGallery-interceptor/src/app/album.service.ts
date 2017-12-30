import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ImageL} from './imageList';

@Injectable()
export class AlbumService {
  constructor(private http: HttpClient)
  {
  }
  getimages(start, limit)
  {
    const url = 'https://jsonplaceholder.typicode.com/photos/?_start='+start+'&'+'_limit='+limit ;
    return this.http.get<ImageL[]>(url); 

  }

}
