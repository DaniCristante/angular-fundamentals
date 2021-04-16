import { Component, OnInit } from '@angular/core';
import { Passanger } from '../../models/passanger.interface';
import { PassangerDashboardService } from '../../passanger-dashboard.service';

@Component({
    selector: 'passanger-dashboard',
    styleUrls: ['passanger-dashboard.component.scss'],
    templateUrl: 'passanger-dashboard.component.html'
})

export class PassangerDashboardComponent implements OnInit {

    passangers: Passanger[];

    constructor
    (
        private passangerService: PassangerDashboardService
    ) {

    }
    ngOnInit() {
        this.passangerService
            .getPassangers()
            .then((data: Passanger[]) => this.passangers = data);
    }

    removePassanger(event: Passanger){
        this.passangerService
            .removePassangers(event)
            .then((data: Passanger) => {
                this.passangers = this.passangers.filter((passanger: Passanger) => {
                    return passanger.id !== event.id ;
            })
        });
    }

    editPassanger(event: Passanger){
        this.passangerService
            .updatePassangers(event)
            .then((data: Passanger) => {
                this.passangers = this.passangers.map((passanger: Passanger) => {
                    if (passanger.id == event.id) {
                        passanger = Object.assign({}, passanger, event);
                    }
                    return passanger;
                })
            })
    }

    addPassanger(){
        this.passangerService
            .addPassanger()
            .then((data: Passanger) => {
                this.passangers.push(data);
            })
    }
}