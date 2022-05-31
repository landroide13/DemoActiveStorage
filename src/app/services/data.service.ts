import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


const key = 'myData'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private storage: Storage) {
    this.init();
   }

  async init(){
    console.log("Init")
    await this.storage.create()
    console.log("Done")
  }

  getData(){
    console.log("Get Data")
    return this.storage.get(key) || [];
  }

  async addData(item){
    const storeData = await this.storage.get(key) || [];
    storeData.push(item);
    return this.storage.set(key, storeData)
  }

  async removeData(idx){
    const storeData = await this.storage.get(key) || [];
    storeData.splice(idx, 1)
    return this.storage.set(key, storeData)
  }

}
