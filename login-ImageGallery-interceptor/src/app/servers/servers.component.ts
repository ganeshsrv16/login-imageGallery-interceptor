import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { FilterPipe } from '../filter.pipe';
import { HighDirective } from '../high.directive';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  
  styles: [`
  p {
    color:purple;
    font-size:40px;
  }
  .kiu
  {
    border-bottom: 6px solid red;
    background-color: lightgrey;
    width:1000px;
  }
  #op
  {
color:Red;
font-size:25px
  }
  table {
    border-collapse: collapse;
   
}

th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}
`]  
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, branch: string, favlang:string, per:number, state:string}[] = [];
  // tslint:disable-next-line:no-inferrable-types
  no: number= 50;
  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  hey(n)
  {
    return this.no=n;
  }
  onReload() {
    // this.router.navigate(['servers'], {relativeTo: this.route});
  }

}
