import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class MoovieProvider {

  private chave:string = 'api_key=6a121585f75fe880244e2522ae692402';
  private link:string = 'https://api.themoviedb.org/3';
  private language:string = '&language=pt-BR';

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }


  getLatestMovies() {
    return this.http.get(this.link+"/movie/latest?"+this.chave);
  }

  getMoviesPopular(page = 1) {
    return this.http.get(this.link+`/movie/popular?page=${page}&`+this.chave+this.language);
  }

  getMovieDetails(filmeId) {
    return this.http.get(this.link+`/movie/${filmeId}`+this.chave+this.language);
  }
}
