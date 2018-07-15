import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components imports
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderNavComponent, FooterNavComponent, SidebarComponent],
  exports: [HeaderNavComponent, FooterNavComponent, SidebarComponent]
})
export class SharedModule {}
