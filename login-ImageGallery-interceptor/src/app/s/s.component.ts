import { Component, OnInit } from '@angular/core';
import {AlbumService} from '../album.service';
import {ImageL} from '../imageList';
import {Ng2PaginationModule} from 'ng2-pagination';


@Component({
  selector: 'app-s',
  templateUrl: './s.component.html',
  styleUrls: ['./s.component.css'],
  styles: [`
  p {
    color:purple;
    font-size:40px;
  }
  
`]  
})
export class SComponent implements OnInit {
 
start: number;
jo:number=10;
limit: number;
jo1:string;
st:ImageL[];
imgList: ImageL[];

  // tslint:disable-next-line:no-trailing-whitespace
 
  constructor(private imageservice: AlbumService) {
 this.start = 0;
  this.limit = 100;
 }

 value:number;
 update()
 {
  this.limit=this.value;
  this.display();
 }
 inc()
 {
   this.jo+=10;

 }
 dec()
 {
   if(this.jo!=10)
   {
    this.jo-=10;
   }
  
 }
   clear(no)
   {
   
     this.start= no;
     this.display();
   }
   cImage(hey)
   {
this.st=hey;
   }
   
     ngOnInit() {
    this.display();
    }
 
  
  display()
  {
    this.imageservice.getimages(this.start,this.limit).subscribe((response: ImageL[]) => {
      this.imgList = response;
      
 });
  }
 

}
