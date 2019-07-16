import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentDetail } from './student-detail.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StudentDetailService {

  Email="ss";
  testob={Name:"Samithra",IsComplete:true}
  constructor(private http:HttpClient) { }


getStudents():Observable<StudentDetail[]>{
return this.http.get<StudentDetail[]>('https://localhost:44339/api/todo/sm')
}

saveStudents(student:StudentDetail){
  return this.http.post<any>('https://localhost:44339/api/Student/save',student);

}

getStudentList(){
  return this.http.get<any>('https://localhost:44339/api/Student/getStudentList')
}

changeText(stu:any){
this.Email = stu.studentName
}

posttest(){
   
  return this.http.post<any>('https://localhost:44339/api/TodoItems2',this.testob);
}



}
