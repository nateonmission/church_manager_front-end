import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  church = {
    name: "Hometown Church",
    address1: "1303 S Shelby St",
    address2: "",
    city: "Louisville",
    state: "Kentucky",
    zip: "40217",
    areaCode: "502",
    exchange: "635",
    phone: "7053",
    email: "hometownchurch@domain.com",
    lat: 38.2339879,
    lon: -85.7421174

};
user = {

  first: "Jerome",
  last: "Allen",
  accessLevel: "Developer",
  loginStamps: ["2022.01.31", "2022.02.01", "2022.02.02", "2022.02.03", "2022.02.04"]
};


  constructor() { }

  ngOnInit(): void {
    console.log(this.user);
  }

  

}
