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
  show: boolean;
  progressRef: number;
  scrollY: number;
  
  // @HostListener('window:scroll') onScroll(e: Event): void {
  //   console.log(e)
  //   this.scrollY = (e.target as Element).scrollTop;
  //   console.log(scrollY)
  // }

  onWindowScroll(event: Event) {
    let elm = document.body
    var p = elm.parentElement
    this.scrollY =  Math.round((elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100)
    console.log(this.scrollY)
  }
  constructor() { }

  ngOnInit(): void {

  }
}

