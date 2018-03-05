import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConfigServicService } from '../config-servic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  chans=false
  
  primerTkn=''
  pageN = 1

  channel={
    kind: '',
    etag: '',
    nextPageToken: '',
    prevPageToken: '',
    pageInfo: {
      totalResults: 0,
      resultsPerPage: 0
    },
    items: [
      {
      }
    ],
  }


  constructor(private _data: ConfigServicService) { }

  ngOnInit() {
    this._data.getPosts()
    .subscribe(data=>this.channel={
      kind: data['kind'],
      etag: data['etag'],
      nextPageToken: data['nextPageToken'],
      prevPageToken: 'primera',
      pageInfo: data['pageInfo'],
      items: data['items']
    });
    this.primerTkn = this.channel.nextPageToken
    this.chans=true
  }

  nextPage(){
    this._data.nxtPage(this.channel.nextPageToken)
    .subscribe(data=>this.channel={
      kind: data['kind'],
      etag: data['etag'],
      nextPageToken: data['nextPageToken'],
      prevPageToken: data['prevPageToken'],
      pageInfo: data['pageInfo'],
      items: data['items']
    });
    this.pageN++
  }

  prevPage(){
    if(this.channel.prevPageToken!='primera' && this.channel.nextPageToken!=this.primerTkn){
      this._data.nxtPage(this.channel.prevPageToken)
        .subscribe(data=>this.channel={
          kind: data['kind'],
          etag: data['etag'],
          nextPageToken: data['nextPageToken'],
          prevPageToken: data['prevPageToken'],
          pageInfo: data['pageInfo'],
          items: data['items']
        });
        this.pageN--
    }
  }


}
