import { Component, OnInit,Output } from '@angular/core';
import {nameL} from '../nameList';
import {NameService} from '../name.service';
import {Ng2PaginationModule} from 'ng2-pagination';
@Component({
  selector: 'app-s2',
  templateUrl: './s2.component.html',
  styleUrls: ['./s2.component.css'],
  styles: [`
  p {
    color:purple;
    font-size:40px;
  }
  
`]  
})
export class S2Component implements OnInit {
 p:number;
 jo:number=5;
 val:number;
 pid:number;
 pname:string;
 pbody:string;
  start: number;
  limit: number;
  nameList: nameL[];
  constructor(private nameservice: NameService) {
this.start=0;
this.limit=50;
   }

  ngOnInit() {
    this.display();
  }
  display()
  {
    this.nameservice.getnames(this.start, this.limit).subscribe((response: nameL[]) => {
      this.nameList = response;
      console.log(response);
 });
  }

  inc()
  {
    this.jo+=5;
 
  }
  dec()
  {
    if(this.jo!=5)
    {
     this.jo-=5;
    }
   
  }


  update()

  {
    this.limit=this.val
    this.display();
  }
  cdetails(id,name,body)
  {
   this.pid=id;
   this.pname=name;
   this.pbody=body;
  }
}
