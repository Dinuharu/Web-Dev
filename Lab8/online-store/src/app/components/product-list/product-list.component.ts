import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  categories: string[] = [];
  products: any[] = [];
  selectedCategory: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  loadProducts(category: string) {
    this.selectedCategory = category;
    this.productService.getProductsByCategory(category).subscribe((data) => {
      this.products = data;
    });
  }

  onRemove(productId: number) {
    this.products = this.products.filter(product => product.id !== productId);
  }
}
