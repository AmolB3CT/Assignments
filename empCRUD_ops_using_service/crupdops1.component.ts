import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-crupdops1',
  templateUrl: './crupdops1.component.html',
  styleUrls: ['./crupdops1.component.css']
})
export class Crupdops1Component implements OnInit {

  eid:number = 0;
  ename:string = "";
  job:string = "";
  sal:number = 0;
  deptno:number = 0;
  isDisabled :boolean = false;

  public empArray:Emp[] = [];
  
  constructor(private dataService: EmpServiceService) { }

  url:string  = "http://localhost:3000/emps";

  ngOnInit(): void {
  }

  getEmpData_click(){
    this.dataService.getData().subscribe( (response:any[]) =>{
      this.empArray = response;
   });
  }

  addEmp_click()
  {
    let empObj:Emp = new Emp();
    empObj.eid = this.eid;
    empObj.ename = this.ename;
    empObj.job = this.job;
    empObj.sal = this.sal;
    empObj.deptno = this.deptno;

    this.dataService.addData(empObj).subscribe( (response:any) =>{
      console.log("New Dept details are added to server.");
      alert("New Dept details are added to server.");
      this.clearFields();
      this.getEmpData_click();
    });
  }

  clearFields()
  {
      this.isDisabled = false;
      this.eid = 0;
      this.ename  = "";
      this.job  = "";
      this.sal = 0;
      this.deptno = 0;
  }

  removeEmpData_click(eid:number)
  {
    this.dataService.deleteData(eid).subscribe( (response:any) =>{
      console.log("Requested Dept details are deleted from  server.");
      alert("Requested Dept details are deleted from  server.");
      this.getEmpData_click(); 
    });
  }

  selectEmp_click(eid:number)
  {
    this.dataService.getDataById(eid).subscribe( (response:any) =>{

      let empObj = response;
      this.eid =   empObj.eid;
      this.ename =   empObj.ename;
      this.job 		=  empObj.job;
      this.sal 		=  empObj.sal;
      this.deptno 		=  empObj.deptno;
      this.isDisabled = true;
    });

  }

  updateEmpData()
  {
    let empObj: Emp = new Emp();
    empObj.eid =   this.eid;
    empObj.ename =   this.ename;
    empObj.job 		=  this.job;
    empObj.sal 		=  this.sal;
    empObj.deptno 		=  this.deptno;

      this.dataService.updateData(empObj).subscribe( (response:any) =>{
        console.log("Requested Dept details are updated to server.");
        alert("Requested Dept details are updated to server.");
        this.clearFields();
        this.getEmpData_click(); 
      });

  }
}
class Emp
{
  eid  : number = 0;
  ename  : string  = "";
  job  : string  = "";
  sal  : number = 0;
  deptno  : number  = 0;
}