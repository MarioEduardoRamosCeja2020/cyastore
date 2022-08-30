import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'cyaStore';
  products ={};
  // constructor(public json: JsonserviceService) {
  //   this.json.getJson("http://localhost:9000/").subscribe((products: any) => {
  //     console.log(products);
  //     products = products;
  //   });


  // }
}