import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MoovieProvider
  ]
})
export class FeedPage {

  public lista_filmes = new Array<any>();

  public objeto_feed = {
    titulo: "Athos Francisco do Código",
    data: "November 5, 1955",
    descricao: "Estou criando um app incrivel...",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h ago"
  };


  public nome_usuario: string = "Athos Francisco";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MoovieProvider) {

  }

  public somaDoisNumeros(num1: number, num2:number): void {
    alert(num1+num2);
  }

  ionViewDidLoad() {
    this.movieProvider.getMoviesPopular()
      .subscribe(
        data =>{
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          console.log(objeto_retorno);
          this.lista_filmes = objeto_retorno.results;
        }, error => {
          console.log(error);
        }
      )
  }

}
