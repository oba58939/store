import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';  // FormsModule をインポート

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
export class AppModule { }
