import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { title } from 'process';
import { EmpService } from 'src/service/emp.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private empService:EmpService, private router:ActivatedRoute) { }

  updateForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  })

  Id= this.router.snapshot.params.id;

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.empService.getCurrent(this.Id).subscribe((res)=>{
      console.log(res);
      this.updateForm = new FormGroup({
        title: new FormControl(res['title']),
        body: new FormControl(res['body'])
      })
    })
  }

  updateData(){
    console.log("update",this.updateForm.value);
    this.empService.updateEmp(this.Id,this.updateForm.value).subscribe((res)=>{
      console.log(res);
      
    }) 
  }

}
