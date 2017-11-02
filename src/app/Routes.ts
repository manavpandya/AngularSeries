import { Routes } from '@angular/router'; 


import { AppComponent } from './app.component'; 
import { TutPart2Component }  from './tut-part-2/tut-part-2.component';
import { TutPart3Component }  from './tut-part-3/tut-part-3.component';
import { TutPart4Component }  from './tut-part-4/tut-part-4.component';
import { TutPart5Component }  from './tut-part-5/tut-part-5.component';


export const routes: Routes = [  
{ path: 'Part2', component: TutPart2Component },
{ path: 'Part3', component: TutPart3Component },  
{ path: 'Part4', component: TutPart4Component },
{ path: 'Part5', component: TutPart5Component }
// { path: 'file', component: fileupload },
// { path: 'Form', component: AppformTest }        
];