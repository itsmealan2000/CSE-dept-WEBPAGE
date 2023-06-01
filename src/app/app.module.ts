import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './units/cards/cards.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { MainlogoComponent } from './units/mainlogo/mainlogo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './units/carousel/carousel.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { VmComponent } from './pages/vm/vm.component';
import { PoComponent } from './pages/po/po.component';
import { AluminiComponent } from './pages/alumini/alumini.component';
import { FacultiesComponent } from './pages/faculties/faculties.component';
import { PeopsoComponent } from './pages/peopso/peopso.component';

import { PacementsComponent } from './pages/pacements/pacements.component';
import { DeptlibComponent } from './pages/deptlib/deptlib.component';



import { SyllabusComponent } from './pages/syllabus/syllabus.component';
import { FooterComponent } from './units/footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    NavbarComponent,
    MainlogoComponent,
    CarouselComponent,
    HomepageComponent,
    VmComponent,
    PoComponent,
    AluminiComponent,
    FacultiesComponent,
    PeopsoComponent,
    PacementsComponent,
DeptlibComponent,

    SyllabusComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
