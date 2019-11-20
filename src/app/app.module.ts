import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CadastroComponent } from "../view/cadastro/cadastro.component";
import { NavComponent } from "../components/nav/nav.component";
import { ListFuncComponent } from "../components/list-func/list-func.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    NavComponent,
    ListFuncComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
