import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: false,
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: any;
  @Output() remove = new EventEmitter<number>();
  likes: number = 0;

  likeProduct() {
    this.likes++;
  }

  removeProduct() {
    this.remove.emit(this.product.id);
  }
}
