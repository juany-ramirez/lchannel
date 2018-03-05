import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

@Injectable()
  export class ConfigServicService {

  channel : any;
    
  readonly ROOT_URL='https://lbackend-197117.appspot.com/'


  constructor(private http: HttpClient) { }
  
  
  getPosts() {
    this.channel= this.http.get(this.ROOT_URL)
    return this.channel
  }

  nxtPage(token) {
    this.channel = this.http.get(this.ROOT_URL+token)
    return this.channel
  }
}
