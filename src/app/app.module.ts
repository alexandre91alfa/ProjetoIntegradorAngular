// modulos
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TooltipModule, BsDropdownModule, ModalModule } from "ngx-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
// componentes
import { AppComponent } from "./app.component";
import { CadastroComponent } from "../view/cadastro/cadastro.component";
import { NavComponent } from "../components/nav/nav.component";
import { ListFuncComponent } from "../components/list-func/list-func.component";
import { FuncionarioComponent } from "../view/funcionario/funcionario.component";
// pipe
import { DateTimeFormatPipe } from "src/helper/DateTimeFormat.pipe";
// service
import { StaffService } from "src/services/Staff.service";
import { InfoComponent } from "../components/info/info.component";

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    NavComponent,
    ListFuncComponent,
    FuncionarioComponent,
    DateTimeFormatPipe,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [StaffService],
  bootstrap: [AppComponent]
})
export class AppModule {}
