import { Component, Input } from '@angular/core';
import { Passanger } from '../../models/passanger.interface';

@Component({
    selector: 'passanger-count',
    templateUrl: 'passanger-count.component.html'
})

export class PassangerCountComponent {
    @Input()
    items: Passanger[];

    checkedInCounter(): number {
        if (!this.items) {
            return;
        }
        // let count = 0;
        // this.items.forEach(passanger => {
        //     if (passanger.checkedIn == true) {
        //         count++;
        //     }
        // });
        // return count;

        return this.items.filter((passanger: Passanger) => passanger.checkedIn).length;
        // return this.items.filter((passanger: Passanger) => {
        //     return passanger.checkedIn;
        // }).length;
    }
}