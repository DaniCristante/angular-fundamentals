import { Component, OnInit } from '@angular/core';
import { PassangerDashboardService } from '../../passanger-dashboard.service';

import { Passanger } from '../../models/passanger.interface';

@Component({
    selector: 'viewer',
    templateUrl: 'viewer.component.html',
    styleUrls: ['viewer.component.scss']
})

export class PassangerViewerComponent implements OnInit {
    passanger: Passanger;

    constructor(private passangerService: PassangerDashboardService) {

    }

    ngOnInit() {
        this.passangerService
            .getSinglePassanger(1)
            .subscribe((data: Passanger) => {
                this.passanger = data;          
            })
    }

    onUpdatePassanger(event: Passanger) {
        this.passangerService
            .updatePassangers(event)
            .subscribe((data: Passanger) => {
                this.passanger = Object.assign({}, this.passanger, event);
            })
    }
}