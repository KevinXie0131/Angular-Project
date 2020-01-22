import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { ProductComponent } from './components/product/product.component';

import { StorageService } from './services/storage.service';
import { CommonService } from './services/common.service';
import { DetailsComponent } from './components/details/details.component';
import { WelcomePipe } from './pipelines/welcome.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ChildComponent } from './components/home/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ProductComponent,
    DetailsComponent,
    WelcomePipe,
    HighlightDirective,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
  ],
  providers: [StorageService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
