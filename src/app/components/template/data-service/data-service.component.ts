import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-data-service',
  templateUrl: './data-service.component.html',
  styleUrls: ['./data-service.component.scss']
})

export class DataServiceComponent implements OnInit {

    ngOnInit(): void {
  }

  private REST_API_SERVER = "https://pokeapi.co/api/v2/pokemon?limit=100";
  private REST_API_SERVER_DETALHE = "https://pokeapi.co/api/v2/pokemon/";


  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public sendGetDetalheRequest(name){
    return this.httpClient.get(this.REST_API_SERVER_DETALHE+name);
  }
}
