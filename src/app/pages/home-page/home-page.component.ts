import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  displayAboutMe: Boolean = false;
  hoverIndex = 0;
  constructor() {
    setInterval(() => {
      this.hoverIndex = (this.hoverIndex + 1) % 5;
    }, 750);

  }

  ngOnInit(): void {
    console.log('HomePage Loaded');
    let aboutMe = document.getElementById("aboutme");
    aboutMe.hidden = true;

    this.startScrollEffect();
  }

  startScrollEffect() {
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  scrollEvent = (event): void => {
    let offset = event.target.scrollingElement.scrollTop
    let mainContent = document.getElementById('mainContent');
    mainContent.style.opacity = String(1 - Number(offset*1.6/mainContent.clientHeight));
  }

  showAboutMe() {
    this.displayAboutMe = true;
  }

  hideAboutMe() {
    this.displayAboutMe = false;
  }

  getAboutMeClass() {
    return this.displayAboutMe? 'about-me-show' : 'about-me-hide';
  }


  getColor() {
    switch(this.hoverIndex) {
      case 0: return 'blue-color';
      case 1: return 'green-color';
      case 2: return 'red-color';
      case 3: return 'pink-color';
      case 4: return 'yellow-color';
    }
  }

  getMagicLinkClass() {
    return 'magic-link ' + this.getColor();
  }
}
