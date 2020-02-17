import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marvel-angular';
  hero = {
    name: 'SPIDER-MAN',
    description: 'Spider-Man is a character created by Stan Lee in...',
    image: 'spider.jpg'
  };
}
