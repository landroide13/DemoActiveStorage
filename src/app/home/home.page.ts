import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listData = []

  constructor(private dataServ: DataService) {
    this.loadData()
  }

  async loadData(){
    this.listData = await this.dataServ.getData();
  }

  async addData(){
    await this.dataServ.addData(`Eltro Lazo ${Math.floor(Math.random() * 100)}`)
    this.loadData()
  }

  async removeItem(idx){
    this.dataServ.removeData(idx)
    this.listData.splice(idx, 1)
  }

}
