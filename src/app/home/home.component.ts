import { Component, OnInit } from '@angular/core';
import { Channel } from './Channel';
import { Observable } from 'rxjs/Observable';
import { ConfigServicService } from '../config-servic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  item={
    name:'',
    description:'',
    date:'',
  };

  items=[]

  channel={
    kind: '',
    etag: '',
    nextPageToken: '',
    prevPageToken: '',
    pageInfo: {
      totalResults: 0,
      resultsPerPage: 0
    },
    items: [{}],
  }
  
  posts : any;


  constructor(private _data: ConfigServicService) { }

  ngOnInit() {
    // this._data.getPosts()
    // .subscribe(data=>this.channel={
    //   kind: data['kind'],
    //   etag: data['etag'],
    //   nextPageToken: data['nextPageToken'],
    //   prevPageToken: data['prevPageToken'],
    //   pageInfo: data['pageInfo'],
    //   items: data['items']
    // });
    this.posts = this._data.getPosts()
  }

}
