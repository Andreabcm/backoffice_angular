import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'gmaps';


  ngOnInit(): void{
    let loader = new Loader({
      apiKey: 'AIzaSyDygsikUrcCdqSQ41E4MJFKBylBwXD9Vok'
    })

    loader.load().then(() => {
      new google.maps.Map(document.getElementById("map")!,{
        center: { lat: 40.463667, lng: -3.74922 },
        zoom: 6
      })
    })

  }

}
