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
            .subscribe((data: Passanger[]) => this.passangers = data, (error: any) => console.log(error));
    }

    removePassanger(event: Passanger){
        this.passangerService
            .removePassangers(event)
            .subscribe((data: Passanger) => {
                this.passangers = this.passangers.filter((passanger: Passanger) => {
                    return passanger.id !== event.id ;
            })
        }, (error: any) => console.log(error));
    }

    editPassanger(event: Passanger){
        this.passangerService
            .updatePassangers(event)
            .subscribe((data: Passanger) => {
                this.passangers = this.passangers.map((passanger: Passanger) => {
                    if (passanger.id == event.id) {
                        passanger = Object.assign({}, passanger, event);
                    }
                    return passanger;
                })
            }, (error: any) => console.log(error))
    }

    addPassanger(){
        this.passangerService
            .addPassanger()
            .subscribe((data: Passanger) => {
                this.passangers.push(data);
            }, (error: any) => console.log('errorr'))
    }
}