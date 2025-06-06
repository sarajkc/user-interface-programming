import { Component} from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/select';
import { MatInput } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
import { Film } from '../home/home.films.model';
import { HomeFilmsService } from '../home/home.films.service';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart/cart.service';
import { AccountService } from '../account/account.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-search',
  imports: [MatToolbar, MatIcon, MatListModule, MatFormField, MatLabel,MatSelect, MatOption, 
    MatCardModule, MatInput, NgFor, FormsModule, RouterLink
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  providers:[CartService]
})
export class SearchComponent implements OnInit{

  films: Film[]=[];
  filteredFilms: Film[]=[];
  getSearchGenre: string []=[];
  selectedGenre: string | null = null;
  searchWords:string= '';
  sortFilms: Film[]=[];

  constructor(private homeFilmsService: HomeFilmsService){}

 ngOnInit(): void{
  this.films = this.homeFilmsService.getFilms();
  this.filteredFilms= this.homeFilmsService.getFilms();
  this.getSearchGenre=this.homeFilmsService.getSpecificGenres();
}

chooseGenre(genre: string | null ):void {

  this.selectedGenre = genre;

  if(!genre){
    this.filteredFilms = this.homeFilmsService.getFilms()
  }
  else{
    this.filteredFilms = this.homeFilmsService.getFilteredFilmByGenre(genre);
  }
  

}

filteredSearch(){
  const lowerSearch = this.searchWords.toLocaleLowerCase();
  this.filteredFilms= this.films.filter(film =>
    film.name.toLocaleLowerCase().includes(lowerSearch) ||
    film.actors?.some((actor: string) => actor.toLocaleLowerCase().includes(lowerSearch)) ||
    film.director?.toLocaleLowerCase().includes(lowerSearch)
  );

}

sortByPriceDesc(){
  this.filteredFilms = this.homeFilmsService.sortByPriceDesc(this.filteredFilms);
}

sortByPriceAsc(){
  this.filteredFilms = this.homeFilmsService.sortByPriceAsc(this.filteredFilms);
}

sortByRatingDesc(){
  this.filteredFilms = this.homeFilmsService.sortByRatingDesc(this.filteredFilms);
}

sortByRatingAsc(){
  this.filteredFilms = this.homeFilmsService.sortByRatingAsc(this.filteredFilms);
}

sortByDurationDesc(){
  this.filteredFilms = this.homeFilmsService.sortByDurationDesc(this.filteredFilms);
}

sortByDurationAsc(){
  this.filteredFilms = this.homeFilmsService.sortByDurationAsc(this.filteredFilms);
}

}


  




