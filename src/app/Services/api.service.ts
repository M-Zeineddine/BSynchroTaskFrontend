import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = 'https://localhost:7157/api/';
  private TRANSACTION_URL = 'https://localhost:7203/api/Transactions/';

  constructor(private http: HttpClient) { }

  createAccount(data: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}Accounts/create`, data);
  }

  getCustomerDetails(customerId: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}Accounts/${customerId}/details`);
  }

  getCustomer(customerId: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}Customers/${customerId}`);
  }

  addTransaction(data: any): Observable<any> {
    return this.http.post(`${this.TRANSACTION_URL}add`, data);
  }

  getTransactions(accountId: number): Observable<any> {
    return this.http.get(`${this.TRANSACTION_URL}account/${accountId}`);
  }
}
