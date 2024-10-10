import { Component } from '@angular/core';
import { Films } from '../model/Film.model';
import { FilmService } from '../services/film.service';
import { Router } from '@angular/router'; // Assure-toi d'importer Router

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css'] // Corrige 'styleUrl' en 'styleUrls'
})
export class AddFilmComponent {
  newFilm = new Films();
  message: string = '';

  constructor(private filmService: FilmService, private router: Router) { // Injecte le Router
  }

  addFilm() {
    //console.log(this.newFilm);
    this.filmService.ajouterFilm(this.newFilm);
    this.message = "Film " + this.newFilm.nomFilm + " ajouté avec succès !";
    this.router.navigate(["films"]); // Utilise le router pour naviguer
  }
}
