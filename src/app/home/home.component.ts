import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "home", // <home></home>
  styleUrls: ["./home.component.scss"],
  templateUrl: "./home.component.html"
})
export class HomeComponent {
  constructor(private httpClient: HttpClient) {

  }

  addToDb() {
    console.log('create db stuff');
    this.httpClient.post('/api/mijoMessages', {
      title: 'haj',
    })
      .subscribe((message) => {
        console.log('message received');
      });
  }

}
