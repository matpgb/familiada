export class Team {
    points: number = 0;
    minorLosses: boolean[] = [false, false, false];
    majorLoss: boolean;

    constructor() {}

    addMinorLoss() : void {
        let i = this.indexOfFirstLosss();

        if ( this.majorLoss ){
            this.reset();
            return;
        }
        if ( i < 0 ){
            this.reset();
            return;
        }
        if ( i == 3 ){
            this.addMajorLoss();
            return;
        }

        this.minorLosses[i] = true;
    }

    addMajorLoss() : void {
        this.reset();
        this.majorLoss = true;
    }

    toggleMinorLoss() : void {
        this.majorLoss = !this.majorLoss;
    }

    private reset() : void {
        this.minorLosses.forEach( (l, i) => this.minorLosses[i] = false );
        this.majorLoss = false;
    }

    private indexOfFirstLosss() : number {
        for ( let i = 0 ; i < this.minorLosses.length ; i++ ){
            if ( this.minorLosses[i] == false ){
                return i;
            }
        }
        return this.minorLosses.length;
    }
}