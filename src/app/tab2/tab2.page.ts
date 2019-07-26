import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public nome_usuario:string="Joao marcos Baviera";
  constructor() {}

  numero1 : number = 0;
  numero2 : number = 0;


  

  public somar(){
    let total = Number(this.numero1) + Number(this.numero2);
    alert('a soma é '+total);

  }

  

  
}
