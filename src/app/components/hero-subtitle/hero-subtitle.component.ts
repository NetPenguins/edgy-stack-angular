import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-hero-subtitle',
  templateUrl: './hero-subtitle.component.html',
  styleUrls: ['./hero-subtitle.component.scss']
})
export class HeroSubtitleComponent implements OnInit {

  @Input() post: Post;
  
  constructor() { }

  ngOnInit(): void {
  }

}
