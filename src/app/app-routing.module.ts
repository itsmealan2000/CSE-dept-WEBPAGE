import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VmComponent } from './pages/vm/vm.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PoComponent } from './pages/po/po.component';
import { FacultiesComponent } from './pages/faculties/faculties.component';
import { PeopsoComponent } from './pages/peopso/peopso.component';
<<<<<<< HEAD
import { AluminiComponent } from './pages/alumini/alumini.component';
=======
import { SyllabusComponent } from './pages/syllabus/syllabus.component';

>>>>>>> c1e522ec0105b6debb05400700e66b512469e620
const routes: Routes = [
  {path: '', component: HomepageComponent},
  { path: 'vm', component: VmComponent},
  { path: 'po', component: PoComponent},
  { path: 'faculties', component: FacultiesComponent},
  { path: 'peopso',component: PeopsoComponent},
<<<<<<< HEAD
  { path: 'alumini',component: AluminiComponent},
=======
  { path: 'syllabus',component: SyllabusComponent},
>>>>>>> c1e522ec0105b6debb05400700e66b512469e620
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
