import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../containers/blog-page/blog-page.component';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  //
  // Input from parent component
  //
  @Input() itemToDisplay: Post;

  constructor() {
  }

  ngOnInit() { }
}
