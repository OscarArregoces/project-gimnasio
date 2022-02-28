import { Component } from '@angular/core';
import { NameExercie } from './services/name_exercie'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'project-gimnasio';
  public show = true;
  public show_setting = false;
  public exercies: any[]
  public select: number;
  public NameExercie: NameExercie;
  public NumberFake1: number[];
  public NumberFake2: number[];
  public NumberFake3: number[];
  public NumberFake4: number[];
  public NumberFake5: number[];
  public NumberFake6: number[];
  public NumberFake7: number[];
 
  public guardado: boolean;

  constructor() {
    this.exercies = [
      { 'id': 1, 'exercie': 'Adomen' },
      { 'id': 2, 'exercie': 'Biceps' },
      { 'id': 3, 'exercie': 'Espalda' },
      { 'id': 4, 'exercie': 'Hombros' },
      { 'id': 5, 'exercie': 'Pectoral' },
      { 'id': 6, 'exercie': 'Pierna' },
      { 'id': 7, 'exercie': 'Trapesio' },
      { 'id': 8, 'exercie': 'Triceps' }
    ]

    this.select = 1;
    this.NumberFake1 = [1, 2, 3];
    this.NumberFake2 = [4, 5, 6];
    this.NumberFake3 = [7, 8, 9];
    this.NumberFake4 = [10, 11, 12];
    this.NumberFake5 = [13, 14, 15];
    this.NumberFake6 = [16];
    this.NumberFake7 = [10, 11];
      
    this.guardado = false;
   
  }

  new_card() {
    this.show = false;
    this.show_setting = true;
  }
  

  saveExercie() {
    this.guardado = true;
    let btnAdbomen1 = document.getElementsByClassName('btnAbdomen1');
    
      
  }

  deteleExercie() {
    this.guardado = false;
    
  }
}
