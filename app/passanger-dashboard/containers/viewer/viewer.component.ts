import { Component, OnInit } from '@angular/core';
import { PassangerDashboardService } from '../../passanger-dashboard.service';

import { Passanger } from '../../models/passanger.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'viewer',
    templateUrl: 'viewer.component.html',
    styleUrls: ['viewer.component.scss']
})

export class PassangerViewerComponent implements OnInit {
    passanger: Passanger;

    constructor(
        private passangerService: PassangerDashboardService,
        private route: ActivatedRoute,
        private router: Router
    ) {

    }

    ngOnInit() {
        this.route.params
            .switchMap((data: Passanger) => 
                this.passangerService.getSinglePassanger(data.id))
            .subscribe((data: Passanger) => this.passanger = data)
        
            
    }

    onUpdatePassanger(event: Passanger) {
        this.passangerService
            .updatePassangers(event)
            .subscribe((data: Passanger) => {
                this.passanger = Object.assign({}, this.passanger, event);
            })
    }
}