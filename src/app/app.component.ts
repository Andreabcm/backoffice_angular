import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'backoffice';

  ngOnInit(): void{
    let loader = new Loader({
      apiKey: 'AIzaSyDygsikUrcCdqSQ41E4MJFKBylBwXD9Vok'
    })

    loader.load().then(() => {
      new google.maps.Map(document.getElementById("map")!,{
        center: { lat: 51.233334, lng: 6.78333 },
        zoom: 3
      })
    })
  }
}
