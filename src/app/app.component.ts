import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'getnews';
  news:any;

  constructor(private api: HttpClient) { }

  getNews(){
    this.api.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').subscribe(res => {
      this.news = res;
      console.log('data response', this.news);
    });
  }
}
