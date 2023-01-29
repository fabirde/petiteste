import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste2',
  templateUrl: './teste2.component.html',
  styleUrls: ['./teste2.component.css']
})
export class Teste2Component implements OnInit{

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  ELEMENT_DATA: any;
  dataSource!: CdkTableDataSourceInput<any>;
  url='data:image/jpeg;base64,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'
  description='nome'

  constructor() {

  }

  ngOnInit(){

  }



}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


