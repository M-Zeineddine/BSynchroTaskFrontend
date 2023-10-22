import { Component } from '@angular/core';
import {
  ApiService
} from 'src/app/Services/api.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

//Fetches and displays details of a specific customer based on the provided customerId
export class CustomersComponent {

  constructor(private apiService: ApiService) { }

  customerId: any;
  customerDetails: any;
  errorMessage?: string
  transactionErrorMessage?: string
  transactionSuccessMessage?: string
  transactionType: string = 'deposit';
  amount?: number;
  accountId?: number;
  refreshAfterTransaction: boolean = false;

  ngOnInit(): void {
  }

  addTransaction() {
    const transactionData = {
      accountId: this.accountId,
      amount: this.amount
    };

    this.apiService.addTransaction(transactionData).subscribe(response => {
      if (response.isSuccess) {
        this.refreshAfterTransaction = true;
        this.fetchCustomerDetails();
        this.transactionSuccessMessage = response.message
        this.transactionErrorMessage = ''
      } else {
        this.transactionErrorMessage = response.message;
        this.transactionSuccessMessage = ''
      }
    });
  }


  //Validates the customerId input and then calls the ApiService to fetch the details of the specified customer
  //On response, it either updates the customerDetails or sets the errorMessage based on the API's response
  fetchCustomerDetails() {
    if (this.refreshAfterTransaction) {
      this.refreshAfterTransaction = false;
    } else {

      if (this.customerId == undefined) {
        this.customerId = 0
      }
      this.apiService.getCustomerDetails(this.customerId).subscribe(
        data => {
          if (data.isSuccess) {
            this.errorMessage = ""
            this.customerDetails = data;
          } else {
            this.customerDetails = null
            this.errorMessage = data.message;
          }
        },
        error => {
          console.error('Error fetching customer details', error);
        }
      );
    }
  }
}
