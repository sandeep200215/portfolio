import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AoutComponent } from './aout/aout.component';
import { EducationComponent } from './education/education.component';
import { SkilssComponent } from './skilss/skilss.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [

   {path:'',component:AoutComponent,pathMatch:'full'},
  {path:'about',component:AoutComponent},
  {path:'education',component:EducationComponent},
  {path:'skills',component:SkilssComponent},
  {path:'projects',component:ProjectsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
