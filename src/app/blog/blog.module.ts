import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// container components imports
import { BlogPageComponent } from './containers/blog-page/blog-page.component';

// stateless component imports
import { BlogComponent } from './blog.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { DialogModalComponent } from './components/dialog-modal/dialog-modal.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BlogComponent,
    BlogPageComponent,
    BlogItemComponent,
    DialogModalComponent
  ]
})
export class BlogModule {}
