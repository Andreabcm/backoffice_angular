import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { RestService } from './rest.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'gmaps'
  
  constructor(private RestService:RestService){

  }

  public uploadData(){
    this.RestService.get(`http://localhost:3000/users`)
    .subscribe(answer => {
      console.log(answer)
    })
  }


  ngOnInit(): void{
    this.uploadData()
    let loader = new Loader({
      apiKey: 'AIzaSyA7LDWSlBJ_nnEGSh7oN99IHKPyR5k4nWc'
    })


    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById("map")!,{
        center: { lat: 41.4039200, lng: 2.2041300},
        zoom: 6
    })
    
    const position = { lat: 41.4039200, lng: 2.2041300}
    const contentString = "<p><b> Latitude </b> 41.4039200</p>" + "<p><b> Longitude </b> 2.2041300</p>"


    const infoWindow = new google.maps.InfoWindow({
      content: contentString,
    });
    
    const marker = new google.maps.Marker({ position: position, map, title:'myposition'
    })

    marker.addListener("click", () => {
      infoWindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });

    })


  }

}
