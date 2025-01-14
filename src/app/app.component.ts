import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Observable, of } from 'rxjs';  // 'of' をrxjsからインポート
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // ここで FormsModule をインポート
  ],
  providers: [],
  bootstrap: [AppComponent]
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products$: Observable<any[]> = of([]);  // 初期化
  searchQuery: string = '';
  selectedGenre: string = '書籍';  // 初期カテゴリー
  selectedStore: string = '新宿店';  // 初期店舗
  genres: string[] = ['書籍', 'DVD', 'CD'];  // 商品カテゴリ
  stores: string[] = ['新宿店', '渋谷店'];  // 店舗リスト

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // 初期データをロードする
    this.onSearch();
  }

  // 検索機能（カテゴリと店舗を含む）
  onSearch() {
    this.products$ = this.productService.getProducts(this.searchQuery, this.selectedGenre, this.selectedStore);
  }
}
