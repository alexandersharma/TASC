import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menus;
  selectedMenu;
  constructor(public dataService: DataService ) { }

  ngOnInit() {
    this.menus = this.dataService.getMenus();
  }
  
  public setSelectedMenu(menu){
    this.selectedMenu = menu;
  }
}
