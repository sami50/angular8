import { Component, OnInit } from '@angular/core';
import { StudentDetail } from '../../shared/student-detail.model';
import { HttpClient } from '@angular/common/http';
import { StudentDetailService } from '../../shared/student-detail.service';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent  {
 
constructor(private studentsService:StudentDetailService){

}
  

studentModel = new StudentDetail();


    
clickSubmit(){

  alert("sasa")
  console.log(this.studentModel)
  this.studentsService.saveStudents(this.studentModel)
  .subscribe(
    data=>{console.log('Success' , data)
  alert(data.Name)
  },
    error=>console.log('Error'  ,error)
  )
}

 
}
