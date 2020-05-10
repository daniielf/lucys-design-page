import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

import {BlackMirror, CannesFilmFestival} from '../../contents/contents.js'  ;


@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @ViewChild('slider1') slider1: NgImageSliderComponent;
  @ViewChild('slider2') slider2: NgImageSliderComponent;

  displayAboutMe: Boolean = false;
  hoverIndex = 0;

  // BlackMirror Content
  blackMirror = BlackMirror;
  blackMirrorIndex = 1;

  // Cannes Content
  cannesFestival = CannesFilmFestival;
  cannesFestivalIndex = 1;

  readMoreTargetId = '';

  imagesSize = {width: '800px', height: '500px', space: 1};

  fullScreenImage: boolean = false;

  constructor() {
    setInterval(() => {
      this.hoverIndex = (this.hoverIndex + 1) % 5;
    }, 750);

  }

  ngOnInit(): void {
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
    let scrollContent = document.getElementById('scrollContent');
    let mainContent = document.getElementById('mainContent');

    // mainContent.style.height = '1px';
    // scrollContent.style.height = '1px';
    mainContent.style.display = 'none';
    scrollContent.style.display = 'none';
  }

  hideAboutMe() {
    this.displayAboutMe = false;
    let scrollContent = document.getElementById('scrollContent');
    let mainContent = document.getElementById('mainContent');
    mainContent.style.display = 'flex';
    scrollContent.style.display = 'flex';
  }

  getAboutMeClass() {
    return this.displayAboutMe? 'about-me-show' : 'about-me-hide';
  }

  goFullScreen() {
    this.fullScreenImage = true;
  }

  closeFullSCreen() {
    this.fullScreenImage = false;
  }

  getOverlayClass() {
    return this.fullScreenImage ? 'overlay-false' : 'overlay';
  }

  toggleReadMore($event) {
    if (!$event || $event === '') this.readMoreTargetId = '';
    this.readMoreTargetId = $event.target.id;
  }

  popUpImage(component) {
    console.log(component);
  }

  scrollToContent(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  nextSlide(component: string) {
    if (!this[component]) return;
    let slider: NgImageSliderComponent = this[component];
    slider.next();
    this.updateIndex(component, slider.visiableImageIndex + 1);
  }

  prevSlide(component: string) {
    if (!this[component]) return;
    let slider: NgImageSliderComponent = this[component];
    slider.prev();
    this.updateIndex(component, slider.visiableImageIndex + 1);
  }

  updateIndex(component: string, index: number) {
    switch (component) {
      case "slider1": this.blackMirrorIndex = index; return;
      case "slider2": this.cannesFestivalIndex = index; return;
      default: return;
    }
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
