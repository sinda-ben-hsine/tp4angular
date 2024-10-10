import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FilmService } from '../services/film.service';
import { Films } from '../model/Film.model';

@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styles: ``
})
export class UpdateFilmComponent implements OnInit {
  currentFilm: Films = new Films(); // Initialisation de currentFilm avec un objet

  constructor(
    private activatedRoute: ActivatedRoute,
    private router :Router,

    private filmService: FilmService
  ) {}

  ngOnInit(): void {
    const filmId = +this.activatedRoute.snapshot.params['id'];
    const foundFilm = this.filmService.consulterFilm(filmId);

    if (foundFilm) {
      this.currentFilm = foundFilm;
    } else {
      console.log("Aucun film trouvé avec cet ID :", filmId);
    }
  }

  updateFilm() {
    //console.log(this.currentFilm);
    // Logique pour mettre à jour le film
    this.filmService.updateFilm(this.currentFilm);
    this.router.navigate(["films"])
  }
}
