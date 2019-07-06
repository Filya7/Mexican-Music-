import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var Beatbox = /** @class */ (function () {
    function Beatbox() {
        this.sounds = {
            sound1: new Tone.Player("./mp3/top_1.mp3").toMaster(),
            sound2: new Tone.Player("./mp3/top_2.mp3").toMaster(),
            sound3: new Tone.Player("./mp3/top_3.mp3").toMaster(),
            sound4: new Tone.Player("./mp3/top_4.mp3").toMaster(),
            sound5: new Tone.Player("./mp3/middle_1.mp3").toMaster(),
            sound6: new Tone.Player("./mp3/middle_2.mp3").toMaster(),
            sound7: new Tone.Player("./mp3/middle_3.mp3").toMaster(),
            sound8: new Tone.Player("./mp3/middle_4.mp3").toMaster(),
            sound9: new Tone.Player("./mp3/bottom_1.mp3").toMaster(), 5: sound10, new: Tone.Player("./mp3/bottom_2.mp3").toMaster(),
            sound11: new Tone.Player("./mp3/bottom_3.mp3").toMaster(),
            sound12: new Tone.Player("./mp3/bottom_4.mp3").toMaster(),
            sound13: new Tone.Player("./mp3/horns.mp3").toMaster(),
            sound14: new Tone.Player("./mp3/guitarron.mp3").toMaster()
        };
        this.objectKeys = Object.keys;
        this.tones = {
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
                sounds: new Tone.Player("./mp3/top_1.mp3").toMaster()
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
                sound: new Tone.Player("./mp3/middle_1.mp3").toMaster()
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
                sound: new Tone.Player("./mp3/bottom_1.mp3").toMaster()
            },
        };
        this.ind = { count: 0 };
    }
    Beatbox.prototype.Debil_vardan = function (sound) {
        var _this = this;
        Tone.context.resume().then(function () { _this.sounds[sound].start(); });
    };
    Beatbox.prototype.ngOnInit = function () {
        var ind = this.ind;
        var step = this.ind.count % 4;
        var tones = this.tones;
        Tone.Transport.scheduleRepeat(function () { repeat(); }, "8n");
        Tone.Transport.start();
        function repeat() {
            var _loop_1 = function (tone) {
                if (ind.count == 8)
                    ind.count = 0;
                var currTone = tones[tone];
                var count = +"1" + ind.count;
                if (currTone.exp[count]) {
                    Tone.context.resume().then(function () {
                        currTone.sound.start();
                    });
                }
            };
            for (var tone in tones) {
                _loop_1(tone);
            }
            setTimeout(function () { ind.count++; }, 0);
        }
        setInterval(function () { repeat(); }, 500);
    };
    Beatbox = tslib_1.__decorate([
        Component({
            selector: 'app-main',
            templateUrl: 'main.page.html',
            styleUrls: ['main.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], Beatbox);
    return Beatbox;
}());
export { Beatbox };
//# sourceMappingURL=main.page.js.map