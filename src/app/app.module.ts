import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EducationComponent } from './education/education.component';
import { AoutComponent } from './aout/aout.component';
import { FooterComponent } from './footer/footer.component';
import { NabvarComponent } from './nabvar/nabvar.component';
import { SkilssComponent } from './skilss/skilss.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
 
    EducationComponent,
    AoutComponent,
    FooterComponent,
    NabvarComponent,
    SkilssComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
