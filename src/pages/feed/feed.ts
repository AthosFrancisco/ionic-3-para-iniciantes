import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
import { FilmeDetalhePage } from '../filme-detalhe/filme-detalhe';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
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

  public refresher;
  public isRefreshing = false;
  public nome_usuario: string = "Athos Francisco";
  public loader;
  public page = 1;
  public infiniteScroll;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MoovieProvider,
    public loadingCtrl: LoadingController) {

  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes..."
    });
    this.loader.present();
  }

  fechaCarregando() {
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;

    this.carregarFilmes();
  }

  public somaDoisNumeros(num1: number, num2: number): void {
    alert(num1 + num2);
  }

  ionViewDidEnter() {
    this.carregarFilmes();
  }

  abrirDetalhes(filme) {
    this.navCtrl.push(FilmeDetalhePage, { id: filme.id });
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);
  }

  carregarFilmes(newPage: boolean = false) {
    this.abreCarregando();
    this.movieProvider.getMoviesPopular(this.page)
      .subscribe(
        data => {
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          console.log(objeto_retorno);

          if(newPage){
            this.lista_filmes = this.lista_filmes.concat(objeto_retorno.results);
            this.infiniteScroll.complete();
          }else{
            this.lista_filmes = objeto_retorno.results;
          }

          this.fechaCarregando();
          if (this.isRefreshing) {
            this.refresher.complete();
            this.isRefreshing = false;
          }
        }, error => {
          console.log(error);

          this.fechaCarregando();
          if (this.isRefreshing) {
            this.refresher.complete();
            this.isRefreshing = false;
          }
        }
      )
  }

}
