import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public objeto_feed = {
    titulo: "Athos Francisco do Código",
    data: "November 5, 1955",
    descricao: "Estou criando um app incrivel...",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h ago"
  };


  public nome_usuario: string = "Athos Francisco";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  public somaDoisNumeros(num1: number, num2:number): void {
    alert(num1+num2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');

    //this.somaDoisNumeros(10, 80);
  }

}
