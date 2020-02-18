import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-loading',
  templateUrl: './intro-loading.component.html',
  styleUrls: ['./intro-loading.component.scss']
})
export class IntroLoadingComponent implements OnInit {
  loaded: boolean;

  constructor() {
    this.loaded = false;
  }

  ngOnInit() {
  }

}
