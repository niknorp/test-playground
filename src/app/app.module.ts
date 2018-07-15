import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BlogModule } from './blog/blog.module';
import { SharedModule } from './shared/shared.module';

// components
import { BlogItemComponent } from './blog/components/blog-item/blog-item.component';
import { DialogModalComponent } from './blog/components/dialog-modal/dialog-modal.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'blog-item', component: BlogItemComponent },
  { path: 'dialog', component: DialogModalComponent }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BlogModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
