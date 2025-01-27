import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/service/CategoryService';
import { CategoryModel } from '../api/model/CategoryModel'; 

@Component({
  selector: 'app-root',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  categories: CategoryModel[] = [];  // Tableau pour stocker les catégories récupérées
  errorMessage: string = '';  // Pour afficher un message d'erreur en cas de problème

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Appel du service pour récupérer toutes les catégories
    this.apiService.getAllCategories().subscribe(
      (data: CategoryModel[]) => {
        this.categories = data;  // Stocker la réponse (les catégories) dans le tableau
      },
      (error) => {
        console.error('Erreur lors de la récupération des catégories', error);
        this.errorMessage = 'Impossible de récupérer les catégories';  // Afficher un message d'erreur
      }
    );
  }
}
