import { Component } from '@angular/core';
import {Platform} from "@ionic/angular";
import {timer} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {}

  async initializeApp() {
    this.platform.ready().then(() => {
      // timer(3000).subscribe(() => this.showSplash = false);
    });
    // const settings = await this.storage.getObject('settings');
    // if (settings && settings.darkMode) {
    //   document.body.classList.toggle('dark', true);
    // }
  }
}
