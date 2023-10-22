import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Provides the main interface for API calls related to accounts, customers, and transactions
export class ApiService {

  //Base URL for accounts and customers API's
  private BASE_URL = 'https://localhost:7157/api/';

  //Base URL for transactions API's
  private TRANSACTION_URL = 'https://localhost:7203/api/Transactions/';

  constructor(private http: HttpClient) { }

  //Makes a POST request to create a new account for a specified customer
  createAccount(data: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}Accounts/create`, data);
  }

  //Makes a GET request to fetch details of a specified customer
  getCustomerDetails(customerId: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}Accounts/${customerId}/details`);
  }

  //Makes a POST request to create a new transaction for a specified account
  addTransaction(data: any): Observable<any> {
    return this.http.post(`${this.TRANSACTION_URL}add`, data);
  }
}
