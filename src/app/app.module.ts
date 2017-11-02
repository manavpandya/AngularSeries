import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TutPart2Component } from './tut-part-2/tut-part-2.component';
import { TutPart3Component } from './tut-part-3/tut-part-3.component';
import { RouterModule } from '@angular/router'; 
import { routes } from './Routes';
import { TutPart4Component } from './tut-part-4/tut-part-4.component';
import { HeroDetailComponent } from './tut-part-4/hero-detail.component';
import { TutPart5Component } from './tut-part-5/tut-part-5.component';


@NgModule({
  declarations: [
    AppComponent,
    TutPart2Component,
    TutPart3Component,
    TutPart4Component,
    HeroDetailComponent,
    TutPart5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
