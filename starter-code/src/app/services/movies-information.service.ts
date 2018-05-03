import { Injectable } from '@angular/core';

@Injectable()
export class MoviesInformationService {
  id: Number;
  title: String;
  poster: String;
  synopsis: String;
  genres: Array<string> = [];
  year: Number;
  director: String;
  actors: Array<string> = [];
  hours: Array<string> = [];
  room: Number;

  constructor() {}

  getMovies() {

  }

  getMovie(id) {

  }

}
