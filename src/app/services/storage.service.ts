import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async setObject(key, value) {
    await Storage.set({
      key,
      value: JSON.stringify(value)
    });
  }

  async getObject(key) {
    const ret = await Storage.get({ key });
    return JSON.parse(ret.value);
  }

  async setData(key, value) {
    await Storage.set({ key, value});
  }

  async getData(key) {
    return await Storage.get({key});
  }

  async removeData(key) {
    return await Storage.remove({ key });
  }

  async clearData() {
    return await Storage.clear();
  }
}
