import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-author-link',
  templateUrl: './author-link.component.html',
  styleUrls: ['./author-link.component.scss']
})
export class AuthorLinkComponent implements OnInit {

  @Input() post: Post;
  constructor() { }

  ngOnInit(): void {
  }

}
