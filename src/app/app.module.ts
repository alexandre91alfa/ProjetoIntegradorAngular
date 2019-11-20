import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CadastroComponent } from "../view/cadastro/cadastro.component";
import { NavComponent } from "../components/nav/nav.component";
import { ListFuncComponent } from "../components/list-func/list-func.component";
import { HttpClientModule } from "@angular/common/http";
import { FuncionarioComponent } from "../view/funcionario/funcionario.component";
import { from } from "rxjs";

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    NavComponent,
    ListFuncComponent,
    FuncionarioComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
