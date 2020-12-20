import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataResolver } from './data-resolver.service';
import { DataViewComponent } from './data-view/data-view.component';
import { StartViewComponent } from './start-view/start-view.component';

const routes: Routes = [
  {path: '' , component: StartViewComponent, pathMatch: 'full'},
  {path: 'data' , component: DataViewComponent, resolve: { dataFromApi: DataResolver }},
  {path: 'start' , component: StartViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }