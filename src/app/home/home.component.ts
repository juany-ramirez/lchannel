import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  video={
    name:'',
    description:'',
    date:'',
  };
  videos=[];
  channelName:string=''

  posts : any;
  readonly ROOT_URL='https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  //deberia de retornar un observable del response del api
  getPosts() {
    this.posts = this.http.get(this.ROOT_URL)
  }
    
}

// $.get(
//   "https://www.googleapis.com/youtube/v3/channels",{
//     part:'contentDetails',
//     forUsername:channelName,
//     key: 'AIzaSyCcdzClrKE6FrsDce4FrnXroYcHohB1zMc',
//     function (data) {
//       $.each(data.items, function(i,item){
//         console.log(item);
//         getVids();
//       })
//     }
//   }
// );

// getVids(pid){
//   $.get(
//     "https://www.googleapis.com/youtube/v3/channels",{
//       part:'contentDetails',
//       forUsername:channelName,
//       key: 'AIzaSyCcdzClrKE6FrsDce4FrnXroYcHohB1zMc',
//       function (data) {
//         $.each(data.items, function(i,item){
//           console.log(item);
//           getVids();
//         })
//       }
//     }
//   );
// }
