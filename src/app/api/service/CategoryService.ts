// src/app/api/api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel } from '../model/CategoryModel';

@Injectable({
  providedIn: 'root'  // Fournisseur au niveau global de l'application
})
export class ApiService {

  private apiUrl = 'http://localhost:8080/api/categories';  // Remplacer par l'URL réelle de ton API

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer toutes les catégories
  getAllCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.apiUrl);  // Envoie une requête GET à l'API
  }
}
