import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {

  constructor(public dataService: DataService, private route: ActivatedRoute) { }
  menu: any;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.menu = this.dataService.getMenu(params.get('id'));
    });
  }

  getTotalTax(){
    var total = 0;
    for(var i = 0; i < this.menu.data.length; i++){
      total += this.menu.data[i].tax;
    }
    return total;
  }

  getTotalPrice(){
    var total = 0;
    for(var i = 0; i < this.menu.data.length; i++){
      total += this.menu.data[i].tax + this.menu.data[i].price;
    }
    return total;
  }

}
