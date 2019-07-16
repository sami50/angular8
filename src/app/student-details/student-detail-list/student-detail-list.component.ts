import { Component, OnInit } from '@angular/core';
import { StudentDetailService } from '../../shared/student-detail.service';

@Component({
  selector: 'app-student-detail-list',
  templateUrl: './student-detail-list.component.html',
  styleUrls: []
})
export class StudentDetailListComponent implements OnInit {

  constructor(private studentsService:StudentDetailService) {


   }
   

   studentList = [{studentName:"samithra",Age:25,Mobile:774443656,Member:true},
   {studentName:"Darshana",Age:25,Mobile:484848,Member:true},
   {studentName:"Maduhansi",Age:44,Mobile:666566,Member:true}
  ]

  getAllStudent(){
    this.studentsService.getStudentList()
    .subscribe(
      data=>{console.log(data) 
        this.studentList = data;
        
      },
      err=>{console.log(err)}
    )
  }
  ngOnInit() {
    this.getAllStudent()
    this.testCall() 
  }

  rowSelect(arg:any){
    this.studentsService.changeText(arg)
    

  }
  testCall(){
    this.studentsService.posttest()
    .subscribe(
      data=>{console.log(data) 
        this.studentList = data;
        
      },
      err=>{console.log(err)}
    )
  }

}
