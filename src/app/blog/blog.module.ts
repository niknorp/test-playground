import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom modules
import { SharedModule } from '../shared/shared.module';

// container components imports
import { BlogPageComponent } from './containers/blog-page/blog-page.component';

// stateless component imports
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { DialogModalComponent } from './components/dialog-modal/dialog-modal.component';
import { BlogComponent } from './blog.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    BlogComponent,
    BlogPageComponent,
    BlogItemComponent,
    DialogModalComponent
  ],
  exports: [BlogPageComponent]
})
export class BlogModule {}
