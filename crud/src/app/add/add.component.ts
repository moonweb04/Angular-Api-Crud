import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmpService } from 'src/service/emp.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private empService:EmpService) { }

  addForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  })

  addData(){
    // console.log(this.addForm.value);
    // this.empService.createEmp(this.addForm.value);
    this.empService.createEmp(this.addForm.value).subscribe((res) =>{
        console.log(res); 
    })
    
  }

  ngOnInit(){
  }

}
