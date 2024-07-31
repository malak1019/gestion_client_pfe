import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as bootstrap from 'bootstrap';
import { Facture } from '../models/facture.model';
@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnInit {
  searchQuery: string = '';
  factures: Facture[] = [];
  selectedFacture: any;
  paymentType: string = ''; 

  private baseUrl = 'http://localhost:8097/api/factures'

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  searchFactures(): void {
    const clientId = Number(this.searchQuery); // Ensure the query is a number
    if (!isNaN(clientId)) {
      this.http.get<any[]>(`${this.baseUrl}/client/${clientId}`).subscribe(
        (data) => {
          this.factures = data;
        },
        (error) => {
          console.error('Error fetching factures:', error);
        }
      );
    }
  }


  openPaymentPanel(facture: any): void {
    this.selectedFacture = facture;
    const paymentModal = new bootstrap.Modal(document.getElementById('paymentModal') as HTMLElement);
    paymentModal.show();
  }

  processPayment(): void {
    console.log(`Processing payment for facture: ${this.selectedFacture.id}, Type: ${this.paymentType}`);
    const paymentModal = bootstrap.Modal.getInstance(document.getElementById('paymentModal') as HTMLElement);
    paymentModal?.hide();
  }
}
