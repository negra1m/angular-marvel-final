import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title = 'MARVEL CHARACTERS API'; // to be set into main page after
  hero = {
    name: 'SPIDER-MAN',
    description: 'Spider-Man is a character created by Stan Lee in...',
    image: 'spider.jpg'
  };

  constructor() { }

  ngOnInit() {
  }

}
