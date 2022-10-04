import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-aside',
  templateUrl: './hero-aside.component.html',
  styleUrls: ['./hero-aside.component.scss']
})
export class HeroAsideComponent implements OnInit {

  @Input() contentHeight;
  imageOffset: number;
  shouldFixAside: boolean;
  show: boolean = false;
  progressRef: number;
  scrollY: number;
  
  @HostListener('window:scroll') onScroll(e: Event): void {
    let elm = document.body
    var p = elm.parentElement
    this.scrollY =  Math.round((elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100)
    
    if (!this.show && this.scrollY > 5 && this.scrollY < 95) {
      this.show = true;
    } else if (this.scrollY > 95 || this.scrollY < 5) {
      this.show = false;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}

