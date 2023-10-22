import { Component } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent {

  constructor(private apiService: ApiService) { }

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
