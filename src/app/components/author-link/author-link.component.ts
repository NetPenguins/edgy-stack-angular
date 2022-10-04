import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-link',
  templateUrl: './author-link.component.html',
  styleUrls: ['./author-link.component.scss']
})
export class AuthorLinkComponent implements OnInit {

  @Input() post;
  constructor() { }

  ngOnInit(): void {
    console.debug(this.post)
  }

}
