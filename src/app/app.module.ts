import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';

import { FeedPageModule } from '../pages/feed/feed.module';
import { IntroPageModule } from '../pages/intro/intro.module';
import { MoovieProvider } from '../providers/moovie/moovie';
import { ConfiguracoesPageModule } from '../pages/configuracoes/configuracoes.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { FilmeDetalhePageModule } from '../pages/filme-detalhe/filme-detalhe.module';
import { CameraPageModule } from '../pages/camera/camera.module';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    IntroPageModule,
    HttpModule,
    ConfiguracoesPageModule,
    PerfilPageModule,
    SobrePageModule,
    FilmeDetalhePageModule,
    CameraPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoovieProvider,
    Camera
  ]
})
export class AppModule {}
