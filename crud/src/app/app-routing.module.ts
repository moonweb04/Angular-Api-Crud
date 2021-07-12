import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListingComponent } from './listing/listing.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'listing', component:ListingComponent},
  {path: 'add', component:AddComponent},
  // {path: 'update', component:UpdateComponent},
  {path: 'update/:id', component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
