import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../containers/blog-page/blog-page.component';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss']
})
export class DialogModalComponent implements OnInit {
  @Input() itemToDisplay: Post;

  @Output() toggleModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onAnyClick() {
    this.toggleModal.emit(false);
  }

  onContainerClick(event) {
    event.stopPropagation();
  }
}
