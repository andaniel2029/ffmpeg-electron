import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as path from 'ffmpeg-static';
import * as cfg from './app-exp';
//import {decodeBuffer} from 'ffmpeg-audiobuffer-stream';
import { decode } from 'ffmpeg-audiobuffer-stream';
import * as ffmpeg from 'fluent-ffmpeg';
import * as audiobuffertowav from './modules/audiobuffer-to-wav';

let pathx = '/Applications/FFMPEG-Test.app/Contents/Resources/app/node_modules/ffmpeg-static/ffmpeg';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
  { provide: cfg, useValue: {
	path: pathx,
	//decodeBuffer: decodeBuffer,
	decodeBuffer: decode,
	ffmpeg: ffmpeg,
	audiobuffertowav: audiobuffertowav,
  }	  },
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
