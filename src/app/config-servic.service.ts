import { Injectable } from '@angular/core';
import { Channel } from './home/Channel';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

@Injectable()
  export class ConfigServicService {

  channel : any;
    
  readonly ROOT_URL='http://localhost:8080/'
  //readonly ROOT_URL='https://jsonplaceholder.typicode.com/posts'


  constructor(private http: HttpClient) { }
  
  
  getPosts() {
    this.channel= this.http.get(this.ROOT_URL)
    return this.channel
  }
}
