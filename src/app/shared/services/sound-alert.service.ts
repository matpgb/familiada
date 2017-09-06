import { Injectable } from '@angular/core';

@Injectable()
export class SoundAlertService {

  constructor() { }

  goodAnswer() : Promise<void>{
    var sound = new Audio(this.goodAnswerSrc);
    sound.play();

    return Promise.resolve();
  }

  badAnswer() : Promise<void>{
    var sound = new Audio(this.badAnswerSrc);
    sound.play();

    return Promise.resolve();
  }

  private goodAnswerSrc : string = '../../../assets/sounds/good.ogg';
  private badAnswerSrc : string = '../../../assets/sounds/bad.ogg';
}
