import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Product {
  title: string;
  author: string;
  genre: string;  // 書籍、DVDなど
  stock: { [key: string]: number };  // 店舗ごとの在庫
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: AngularFirestore) {}

  // 商品情報の取得（カテゴリと店舗を指定して検索）
getProducts(query: string, genre: string, store: string): Observable<any[]> {
  return this.firestore.collection('products', ref =>
    ref
      .where('title', '>=', query)
      .where('title', '<=', query + '\uf8ff')
      .where('genre', '==', genre)
      .where(`stock.${store}`, '>', 0)  // 店舗ごとの在庫がある商品を検索
  ).valueChanges();
}


  // 商品情報の追加
  addProduct(product: Product): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection('products').doc(id).set(product);
  }
}
