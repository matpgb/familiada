import { Injectable } from '@angular/core';

@Injectable()
export class PointsCounterService {

  constructor() { }

  addPointsToTeam ( teamName: string, points: number ) : void {
    switch( teamName.toLowerCase() ){
      case 'a':
        this.teamAPoints += points;
        break;
      case 'b':
        this.teamBPoints += points;
        break
    }
  }

  getPoints ( teamName: string ) : number {
    switch ( teamName ){
      case 'a':
        return this.teamAPoints;
      case 'b':
        return this.teamBPoints;
    }

    return -1;
  }

  private teamAPoints: number = 0;
  private teamBPoints: number = 0;
}
