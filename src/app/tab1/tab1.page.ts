import { Component, Inject } from '@angular/core';
import { Track } from './track';
import { File } from '@ionic-native/file/ngx';
import * as cfg from '../app-exp';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  audioCtx: AudioContext = new AudioContext();
  offlineAudioCtx: OfflineAudioContext;
  source: AudioBufferSourceNode = null;
  
  tracks: Track[];
  
  constructor(
	@Inject(cfg) private kak: any) {
		
kak.ffmpeg.setFfmpegPath(kak.path) ;
		console.log(kak);
    var self = this;
    this.tracks = [
      new Track('name', 'MP3', "C:/denis/mixo-sandbox-node/audio/Daft Punk - Get Lucky (Joe Maz Remix) (Extended).mp3"),
new Track('name', 'MP3', "C:/denis/mixo-sandbox-node/audio-other-files/14 Clementi Piano Sonata.m4a"),
new Track('name', 'MP3', "C:/denis/mixo-sandbox-node/audio-other-files/1716370_Bellissima_Radio_Edit.aiff"),
new Track('name', 'MP3', "C:/denis/mixo-sandbox-node/audio-other-files/1749298_Pump_Up_The_Jam_Crowd_Is_Jumpin_Mix.aiff"),
new Track('name', 'MP3', "C:/denis/mixo-sandbox-node/audio-other-files/2372383_file_example_WAV_1MG.wav"),
new Track('name', 'MP3', "C:/denis/mixo-sandbox-node/audio-other-files/3053016_Must_Be_The_Music_Crazibiza_Remix.aiff"),
new Track('name', 'MP3', "C:/denis/mixo-sandbox-node/audio-other-files/6276896_The_Sign_Original_Mix.aiff"),
new Track('name', 'MP3', "C:/denis/mixo-sandbox-node/audio-other-files/6918645_We_Come_1_Rollo___Sister_Bliss_Remix.aiff"),
new Track('name', 'MP3', "C:/denis/mixo-sandbox-node/audio-other-files/8314563_Lazy__feat__David_Byrne__Extended_Version.aiff"),
new Track('name', 'MP3', "C:/denis/mixo-sandbox-node/audio-other-files/9119531_Another_Night_Radio_Mix.aiff"),
new Track('name', 'MP3', "C:/denis/mixo-sandbox-node/audio-other-files/db.wav"),
new Track('name', 'MP3', "C:/denis/mixo-sandbox-node/audio-other-files/DogHouse.aiff"),
new Track('name', 'MP3', "C:/denis/mixo-sandbox-node/audio-other-files/DontStop.mp3"),
new Track('name', 'MP3', "C:/denis/mixo-sandbox-node/audio-other-files/file_example_MP3_700KB.mp3"),
new Track('name', 'MP3', "C:/denis/mixo-sandbox-node/audio-other-files/file_example_OGG_1MG.ogg"),
new Track('name', 'MP3', "C:/denis/mixo-sandbox-node/audio-other-files/file_example_WAV_1MG.wav"),
new Track('name', 'MP3', "C:/denis/mixo-sandbox-node/audio-other-files/ForestRhythm.ogg"),
new Track('name', 'MP3', "C:/denis/mixo-sandbox-node/audio-other-files/jm2013-10-05-t12-MP3-V0.mp3"),
new Track('name', 'MP3', "C:/denis/mixo-sandbox-node/audio-other-files/M4A-ALAC-Chapter___Verse-Music_Is_My_Life-Original_Mix-21334076.m4a"),

new Track('name', 'MP3', 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3'),
      new Track('name', 'AIFF', 'https://choones.nyc3.digitaloceanspaces.com/a.aiff'),
      new Track('name', 'MP3', 'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3'),
      new Track('name', 'OGG', 'https://file-examples-com.github.io/uploads/2017/11/file_example_OOG_1MG.ogg'),
      new Track('name', 'WAV', 'https://file-examples-com.github.io/uploads/2017/11/file_example_WAV_1MG.wav'),
      new Track('m4a alac', 'M4A (ALAC)', 'http://www.hyperion-records.co.uk/audiotest/14%20Clementi%20Piano%20Sonata%20in%20D%20major,%20Op%2025%20No%206%20-%20Movement%202%20Un%20poco%20andante.M4A'),

    ];

  }
  
  async play(v, t: Track) {

var log = (arr) => {
    console.log(JSON.stringify(arr));
}
const sampleRate = 44100 // Hz
const numberOfChannels = 2 // stereo
				let s = new Date();
                let audioStream = this.kak.decodeBuffer(t.url, sampleRate);
                audioStream.on('data', async chunk => {
					var vav = this.kak.audiobuffertowav(chunk);
					console.log(['chunk received', vav]);
					await this.onBufferReceived(vav, t);
				});
                
    //this.loadSound(t);
  }
  async onBufferReceived(buffer, t: Track) {
    console.log('Finished loading track');
    console.log('Start decoding');
    var self = this;
    let data; // decoded stream available to play!
    data = await self.audioCtx.decodeAudioData(buffer);
    //window.data = data;
    if (data) {
      //console.log(['decodeAudioData', data.getChannelData(0), data.getChannelData(1)]);
      console.log('Finished decoding');
      self.playSound(data);
    }
  }
  playSound(buffer) {
    console.log('Stop previous track');
    this.stop();
    //creating source node
    this.source = this.audioCtx.createBufferSource();
    //passing in data
    this.source.buffer = buffer;
    //giving the source which sound to play
    this.source.connect(this.audioCtx.destination);
    //start playing
    console.log('Playing track...');
    this.source.start(0);
  }
  stop() {
    if (this.source) {
    	this.source.stop(0);
    	console.log('Stop track');
    };
  }
  clear() {
    var text = document.querySelector('#text');
    var wave = document.querySelector('#waveform');
    var svg = document.querySelector('#svg');
    text.innerHTML = null;
    wave.innerHTML = null;
    svg.innerHTML = null;
    console.log('Clear view');
  }
}
