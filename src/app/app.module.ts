import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http'; 
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentDetailListComponent } from './Student-details/student-detail-list/student-detail-list.component';
import { StudentDetailComponent } from './Student-details/student-detail/student-detail.component';
import { StudentDetailService } from './shared/student-detail.service';


@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentDetailListComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule 
  ],
  providers: [StudentDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
