import { Component } from '@angular/core';
import {
  ApiService
} from 'src/app/Services/api.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {

  constructor(private apiService: ApiService) { }

  customerId: any;
  customerDetails: any;
  errorMessage?: string;

  ngOnInit(): void {
  }

  fetchCustomerDetails() {
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
