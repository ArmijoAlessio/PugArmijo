import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT
import { legos } from './legos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  results: legos[];
  private BASE_URL:string = '/api';
    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      // Make the HTTP request:
      this.http.get<legos[]>('https://3000-e7a05d91-1752-4200-897b-227bcc29f4c2.ws-eu01.gitpod.io/api').subscribe(data => {
        // Read the result field from the JSON response.
        this.results = data;
      });
    }
}
