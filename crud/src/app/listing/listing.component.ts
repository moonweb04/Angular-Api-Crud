import { Component, OnInit } from '@angular/core';
import { EmpService } from 'src/service/emp.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  apiData = {}

  constructor(private empService:EmpService) { }

  ngOnInit(){
    this.empService.getEmp().subscribe(data => this.apiData = data)
  }

  deleteFun(id){
    this.empService.deleteEmp(id).subscribe((res) =>{
      console.log(res);  
    })
  }
}
