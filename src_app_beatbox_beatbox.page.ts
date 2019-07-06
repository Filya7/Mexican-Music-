import { Component } from '@angular/core';
import { log } from 'util';
declare var Tone: any;
@Component({
  selector: 'app-beatbox',
  templateUrl: 'beatbox.page.html',
  styleUrls: ['beatbox.page.scss'],
})
export class BeatboxPage {
  objectKeys = Object.keys;
  tones = {
    kick: {
      exp: {
        '1': false,
        '2': false,
        '3': false,
        '4': false,
        '5': false,
        '6': false,
        '7': false,
        '8': false,
      },
      sound: new Tone.Player("./assets/sounds/kick.wav").toMaster()
    },
    snare: {
      exp: {
        '1': false,
        '2': false,
        '3': false,
        '4': false,
        '5': false,
        '6': false,
        '7': false,
        '8': false,
      },
      sound: new Tone.Player("./assets/sounds/snare.wav").toMaster()
    },
    hihat: {
      exp: {
        '1': false,
        '2': false,
        '3': false,
        '4': false,
        '5': false,
        '6': false,
        '7': false,
        '8': false,
      },
      sound: new Tone.Player("./assets/sounds/hihat.wav").toMaster()
    },
    shaker: {
      exp: {
        '1': false,
        '2': false,
        '3': false,
        '4': false,
        '5': false,
        '6': false,
        '7': false,
        '8': false,
      },
      sound: new Tone.Player("./assets/sounds/shaker.wav").toMaster()
    },
  }
  ind = { count: 0 };
  ngOnInit() {
    let ind = this.ind;
    let step = this.ind.count % 4;
    let tones = this.tones;
    //Tone.Transport.scheduleRepeat(function () { repeat(); }, "8n");
    Tone.Transport.start();
    function repeat() {
      for (let tone in tones) {
        if (ind.count == 8) ind.count = 0;
        let currTone = tones[tone];
        let count = +"1" + ind.count;
        if (currTone.exp[count]) {
          Tone.context.resume().then(() => {
            currTone.sound.start();
          })
        }
      }
      setTimeout(() => { ind.count++ }, 0);
    }
    setInterval(() => { repeat(); }, 500)
  }
}