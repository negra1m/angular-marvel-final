import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marvel-angular';
  hero = {
    name: 'HULK',
    description: 'Hulk loves to SMASH!'
  };
}
