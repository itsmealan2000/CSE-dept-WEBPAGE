import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VmComponent } from './pages/vm/vm.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PoComponent } from './pages/po/po.component';
import { FacultiesComponent } from './pages/faculties/faculties.component';
import { PeopsoComponent } from './pages/peopso/peopso.component';
import { AluminiComponent } from './pages/alumini/alumini.component';
import { SyllabusComponent } from './pages/syllabus/syllabus.component';
import { DeptlibComponent } from  './pages/deptlib/deptlib.component';
import { StdlistComponent } from './pages/stdlist/stdlist.component';
import { FirstyearComponent } from './pages/stdlist/firstyear/firstyear.component';
import { SecondyearComponent } from './pages/stdlist/secondyear/secondyear.component';
import { ThirdyearComponent } from './pages/stdlist/thirdyear/thirdyear.component';
import { FourthyearComponent } from './pages/stdlist/fourthyear/fourthyear.component';
import { ResourcesComponent } from './pages/resources/resources.component';
const routes: Routes = [
  {path: '', component: HomepageComponent},
  { path: 'vm', component: VmComponent},
  { path: 'po', component: PoComponent},
  { path: 'faculties', component: FacultiesComponent},
  { path: 'peopso',component: PeopsoComponent},
  { path: 'alumini',component: AluminiComponent},
  { path: 'syllabus',component: SyllabusComponent},
  { path: 'deptlib',component:DeptlibComponent},
  { path: 'stdlist',component:StdlistComponent},
  { path: 'first',component:FirstyearComponent},
  { path: 'second',component:SecondyearComponent},
  { path: 'third',component:ThirdyearComponent},
  { path: 'fourth',component:FourthyearComponent},
  { path: 'resources',component:ResourcesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
