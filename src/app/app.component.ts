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
      apiKey: 'AIzaSyDMf_pTa9KElHEg5tlJy3evKaaAVdwJRFc'
    })

    loader.load().then(() => {
      new google.maps.Map(document.getElementById("map")!,{
        center: { lat: 41.395639, lng: 2.1922392 },
        zoom: 6
      })
    })

  }

}
