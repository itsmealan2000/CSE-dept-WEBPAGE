import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VmComponent } from './pages/vm/vm.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
const routes: Routes = [
  {path: '', component: HomepageComponent},
  { path: 'vm', component: VmComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
