import { Component, OnInit } from '@angular/core';
import { JsonserviceService } from './../jsonservice.service';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent {
  public productList:any = [];
  constructor(public json: JsonserviceService) {
    this.json.getJson("http://localhost:9000/").subscribe((products: any) => {
      console.log(products);
      this.productList = products;
    });


  }

}
