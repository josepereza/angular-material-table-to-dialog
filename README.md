# angular-material2-table-to-dialog-xfmtqx

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-material2-table-to-dialog-xfmtqx)

## Ejemplos:
* https://material.angular.io/components/dialog/examples
* https://blog.angular-university.io/angular-material-data-table/
* https://therichpost.com/angular-9-material-datatable-open-material-dialog-on-row-button-click-event-functionality/


### The mat-row component and the matRowDef directive

This component / directive pair also works in a similar way to what we have seen in previous cases:

   * matRowDef identifies which element inside mat-table provides configuration for how a data row should look like, without providing any specific styling
    on the other hand, mat-row will provide some Material stying to the data row

With mat-row, we also have a variable exported that we have named row, containing the data of a given data row, and we have to specify the columns property, which contains the order on which the data cells should be defined.
Interacting with a given table data row

We can even use the element identified by the matRowDef directive to interact with a given data row. For example, this is how we can detect if a given data row was clicked:
```
<mat-row *matRowDef="let row; columns: displayedColumns" 
         (click)="onRowClicked(row)">
</mat-row>
```
view raw
05.html hosted with ❤ by GitHub

When a row is clicked, we will call the onRowClicked() component method, that will then log the row data to the console:
```
onRowClicked(row) {
    console.log('Row clicked: ', row);
}
```
view
raw
06.ts hosted with ❤ by GitHub

If we now click on the first row of our data table, here is what the result will look like on the console:
Material Data Table

As we can see the data for the first row is being printed to the console, as expected! But where is this data coming from?

To answer that, let's then talk about the data source that is linked to this data table, and go over the Material Data Table reactive design.

