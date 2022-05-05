import {
  Component, ElementRef, ViewChild
} from '@angular/core';
import { VERSION, MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';

import { SampleDialogComponent } from '../dialog/sample-dialog.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource: MatTableDataSource<PeriodicElement>;

  constructor(private _dialog: MatDialog) {

  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }

  openDialog(row: PeriodicElement) {
    console.log('Row clicked', row);
    const dialog = this._dialog.open(SampleDialogComponent, {
      width: '250px',
      // Can be closed only by clicking the close button
      disableClose: true,
      data: row
    });
  }
}


/**
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */