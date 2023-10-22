import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAccountComponent } from './Components/Account/add-account/add-account.component';
import { CustomersComponent } from './Components/Customer/customers/customers.component';

const routes: Routes = [
  { path: 'add-account', component: AddAccountComponent },
  { path: 'customer-details', component: CustomersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
