import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { DisplayComponent } from './components/display/display.component';

const routes: Routes = [
  { path: 'add-address', component: AddressFormComponent },
  { path: 'edit-address/:id', component: AddressFormComponent },
  { path: 'display', component: DisplayComponent },
  { path: '', component: DisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
