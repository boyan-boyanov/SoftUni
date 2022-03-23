import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [HeaderNavComponent,
    FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [HeaderNavComponent,
    FooterComponent]
})
export class CoreModule { }
