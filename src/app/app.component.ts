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

    const position = { lat: 50.395639, lng: 1.1922392}

    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById("map")!,{
        center: { lat: 50.395639, lng: 1.1922392 },
        zoom: 6
    })
    
    new google.maps.Marker({ position: position, map, title:'myposition'
    })

    })
    

  }

}
