import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeadingComponent } from './components/heading/heading.component';
import { InfoGeneralComponent } from './components/info-general/info-general.component';
import { InfoFinancialComponent } from './components/info-financial/info-financial.component'

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HeaderComponent,
    MenuComponent,
    HeadingComponent,
    InfoGeneralComponent,
    InfoFinancialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
