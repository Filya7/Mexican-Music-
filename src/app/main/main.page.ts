import { Component, ɵConsole } from '@angular/core';
import { log } from 'util';
declare var Tone: any;
@Component({
  selector: 'app-main',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss'],
})
export class Beatbox {
  constructor() {
  }

  objectKeys = Object.keys;
  tones = {
    first: {
      exp: {
        '1': false,
        '2': false,
        '3': false,
        '4': false,
        '5': false,
        '6': false,
        '7': false,
        '8': false,
        '9': false,
        '10': false
      }, 
      sound: new Tone.Player("./mp3/top_1.mp3").toMaster()
    },
    second: {
      exp: {
        '1': false,
        '2': false,
        '3': false,
        '4': false,
        '5': false,
        '6': false,
        '7': false,
        '8': false,
        '9': false,
        '10': false
      },
      sound: new Tone.Player("./mp3/middle_1.mp3").toMaster()
    },
    third: {
      exp: {
        '1': false,
        '2': false,
        '3': false,
        '4': false,
        '5': false,
        '6': false,
        '7': false,
        '8': false,
        '9': false,
        '10': false
      },
      sound: new Tone.Player("./mp3/bottom_1.mp3").toMaster()
    }
  }
  tones_1 = {
    guitar: {
      exp: {
        '1': false
      },
      sound: new Tone.Player("./mp3/guitarron.mp3").toMaster()
    },
    horns: {
      exp: {
        '1': false
      },
      sound: new Tone.Player("./mp3/horns.mp3").toMaster()
    }
  }
  ind = { count: 0 };
  playInterval;
  playInterval_1;
  count = 0;
  count_1 = 0;
  ind_1 = { count_1: 0 };
  filya = false;
  petros = false;
  hripsime = false;
  play() {  
    let ind = this.ind;
    let ind_1 = this.ind_1;
    let tones = this.tones;
    let tones_1 = this.tones_1;
    function repeat() {
      for (let tone in tones) {
        if (ind.count == 10) ind.count = 0;
        let currTone = tones[tone];
        let count = + "1" + ind.count;
        console.log(currTone.exp[count])
        if (currTone.exp[count]) {
          Tone.context.resume().then(() => {
            currTone.sound.start();
          })
        }
      }
     setTimeout(() => { ind.count++ }, 0);
    }
    this.count++;
    if(this.count%2!=0){
        this.playInterval = setInterval(repeat,1000);
    }
    else{
      clearInterval(this.playInterval);
    }
    
    function repeat_1() {
      for (let tone_1 in tones_1) {
        if (ind_1.count_1 == 1) ind_1.count_1 = 0;
        let currTone_1 = tones_1[tone_1];
        let count_1 = + "1" + ind_1.count_1;
        console.log(currTone_1.exp[count_1])
        if (currTone_1.exp[count_1]) {
          Tone.context.resume().then(() => {
            currTone_1.sound.start();
          })
        }
      }
     setTimeout(() => { ind_1.count_1++ }, 0);
    }
    this.count_1++;
    if(this.count_1%2!=0){
        this.playInterval_1 = setInterval(repeat_1,10000);
    }
    else{
      clearInterval(this.playInterval_1);
    }
  }
}