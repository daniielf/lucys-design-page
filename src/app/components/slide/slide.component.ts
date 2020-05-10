import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  @Input('slides') slides: Array<any> = [];
  public index: number = 1;
  constructor() { }

  ngOnInit(): void {
    console.log(this.slides[this.index - 2]);
    console.log(this.slides[this.index - 1]);
    console.log(this.slides[this.index]);
  }

}
