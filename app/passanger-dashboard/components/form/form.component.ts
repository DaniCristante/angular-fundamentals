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
}