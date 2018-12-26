import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class MoovieProvider {

  private chave:string = '?api_key=6a121585f75fe880244e2522ae692402';
  private link:string = 'https://api.themoviedb.org/3';
  private language:string = '&language=pt-BR';

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }


  /*getLatestMovies() {
    return this.http.get(this.link+"/movie/latest"+this.chave);
  }*/

  getMoviesPopular() {
    return this.http.get(this.link+"/movie/popular"+this.chave+this.language);
  }
}
