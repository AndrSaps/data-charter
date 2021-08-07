import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonSharedModule } from 'src/modules/common-shared/common-shared.module';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MenuListComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    BrowserModule,
    CommonSharedModule,
    MatSidenavModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
