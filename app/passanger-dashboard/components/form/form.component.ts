import { Component, Input } from "@angular/core";
import { Passanger } from '../../models/passanger.interface';

@Component({
    selector: 'passanger-form',
    templateUrl: 'form.component.html',
    styleUrls: ['form.component.scss']
})

export class PassangerFormComponent {
    @Input()
    detail: Passanger;

    toggleCheckIn(checkedIn: boolean) {
        if (checkedIn) {
            this.detail.checkedInDate = Date.now();
        } else {
            this.detail .checkedInDate = null;
        }
    }
}