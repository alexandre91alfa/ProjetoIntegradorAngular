import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FuncionarioComponent } from "src/view/funcionario/funcionario.component";
import { CadastroComponent } from "src/view/cadastro/cadastro.component";

const routes: Routes = [
  { path: "", component: CadastroComponent },
  { path: "Analitico", component: FuncionarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
