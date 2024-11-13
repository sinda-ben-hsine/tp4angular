import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Films } from '../model/Film.model';
import { AuthService } from '../services/auth.service';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent implements OnInit {
  films: Films[];
  

  constructor(private filmService : FilmService,
    private router: Router,
    public authService: AuthService) {
    this.films=[];
    
    
  }

  ngOnInit(): void {
    this.films = this.filmService.listeFilms();
    
  }
  supprimerFilm(prod : Films){
    //console.log(prod);
    let conf = confirm("Etes-vous sûr ?");
 if (conf)
    this.filmService.supprimerFilm(prod);


  }
}