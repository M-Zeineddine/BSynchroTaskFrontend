import { Component } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})

//Provides the functionality to add a new account for a given customer with an optional initial credit
export class AddAccountComponent {

  constructor(private apiService: ApiService) { }

  //Object that gets user input
  data = {
    customerId: 0,
    initialCredit: 0
  };

  errorMessage?: string
  successMessage?: string

  onSubmit(): void {
    this.apiService.createAccount(this.data).subscribe(response => {
      if (response.isSuccess) {
        this.successMessage = response.message
        this.errorMessage = ''
      } else {
        this.errorMessage = response.message;
        this.successMessage = ''
      }
      console.log('Account created!', response);
    });
  }

}
