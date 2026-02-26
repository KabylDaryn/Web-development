import { Product } from '../../models/product.model';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

type SortField = 'name' | 'price' | 'rating';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnChanges {
  @Input() products: Product[] = [];
  @Output() deleteProduct = new EventEmitter<number>();

  sortField: SortField | null = null;
  sortAsc = true;
  sortedProducts: Product[] = [];

  ngOnChanges() {
    this.applySort();
  }

  setSort(field: SortField) {
    if (this.sortField === field) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortField = field;
      this.sortAsc = true;
    }
    this.applySort();
  }

  applySort() {
    let result = [...this.products];
    if (this.sortField) {
      const field = this.sortField;
      const asc = this.sortAsc;
      result.sort((a, b) => {
        const valA = a[field];
        const valB = b[field];
        if (typeof valA === 'string' && typeof valB === 'string') {
          return asc ? valA.localeCompare(valB, 'ru') : valB.localeCompare(valA, 'ru');
        }
        return asc ? (valA as number) - (valB as number) : (valB as number) - (valA as number);
      });
    }
    this.sortedProducts = result;
  }

  onDelete(id: number) {
    this.deleteProduct.emit(id);
  }
}