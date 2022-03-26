import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private quizzes = [
    { title: 'Animal Quiz', description: 'Animal Quiz for kids.', route: 'animals'},
    { title: 'Science: Computer Quiz', description: 'Science: Computer Quiz for kids.', route: 'computers'},
    { title: 'Sports Quiz', description: 'Sports Quiz for kids.', route: 'sports'}
  ];

  constructor() {}

  async changeThemeSettings($event) {
    this.toggleDarkTheme($event.detail.checked);
    // this.settings.darkMode = $event.detail.checked;
    // await this.storage.setObject('settings', this.settings);
  }

  toggleDarkTheme(shouldAdd) {
    document.body.classList.toggle('dark', false);
  }

}
