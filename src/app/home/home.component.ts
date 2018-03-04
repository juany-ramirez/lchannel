import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {}
    
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
