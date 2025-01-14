import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products$: Observable<any[]>;
  searchQuery: string = '';
  selectedGenre: string = '書籍';  // 初期カテゴリー
  selectedStore: string = '新宿店';  // 初期店舗
  genres: string[] = ['書籍', 'DVD', 'CD'];  // 商品カテゴリ
  stores: string[] = ['新宿店', '渋谷店'];  // 店舗リスト

  constructor(private productService: ProductService) {}

  // 検索機能（カテゴリと店舗を含む）
  onSearch() {
    this.products$ = this.productService.getProducts(this.searchQuery, this.selectedGenre, this.selectedStore);
  }
}
