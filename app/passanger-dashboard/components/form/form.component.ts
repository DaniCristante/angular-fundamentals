import { Component, Input } from "@angular/core";
import { Passanger } from '../../models/passanger.interface';
import { BaggageInterface } from '../../models/baggage.interface';

@Component({
    selector: 'passanger-form',
    templateUrl: 'form.component.html',
    styleUrls: ['form.component.scss']
})

export class PassangerFormComponent {
    @Input()
    detail: Passanger;

    baggage: BaggageInterface[] = 
    [
        {
            key: 'none',
            value: 'No Bagagge'
        },
        {
            key: 'hand',
            value: 'Hand Bagagge'
        },
        {
            key: 'hold',
            value: 'Hold Bagagge'
        },
        {
            key: 'hand-hold',
            value: 'Hand and hold bagagge'
        },
    ];

    toggleCheckIn(checkedIn: boolean) {
        if (checkedIn) {
            this.detail.checkedInDate = Date.now();
        } else {
            this.detail .checkedInDate = null;
        }
    }
}