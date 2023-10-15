import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columsCountChange = new EventEmitter<number>();
  sort = 'desc';
  itemsShowCount = 12;

  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string):void {
    this.sort = newSort;
  }

  onItemsUpdated(count: number):void {
    this.itemsShowCount = count;
  }

  onColumsUpdated(colsNum: number):void {
    this.columsCountChange.emit(colsNum);
  }

}
