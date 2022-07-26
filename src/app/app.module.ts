import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PpfComponent } from './ppf/ppf.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [			
    AppComponent,
      NavbarComponent,
      PpfComponent,
      AboutComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
