import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {DataServiceComponent} from '../../src/app/components/template/data-service/data-service.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title='pokemon'
  pokemons$ = [];
  detail$ = [];

  constructor(private dataService: DataServiceComponent) { }

  ngOnInit() {

    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      console.log(data["results"]);
      this.pokemons$ = data["results"];
    })
  }


  public getData(name): void {
    this.dataService.sendGetDetalheRequest(name).subscribe((data: any[])=>{
      this.detail$[0] = data;
    })
 }
  
}


