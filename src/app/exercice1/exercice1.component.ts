import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  text: string;

  constructor() {
    this.text = 'def value';

  }
  public setValue(event){
    this.text = event.target.value;

  }


  ngOnInit(): void {
  }

}
