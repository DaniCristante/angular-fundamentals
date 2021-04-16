import { Passanger } from './models/passanger.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Http, Response } from '@angular/http';

const PASSANGER_API: string = '/api/passangers';

@Injectable()
export class PassangerDashboardService {
    newPassanger: Passanger = {
        id: 5,
        fullname: 'manolo',
        checkedIn: false,
        checkedInDate: null,
        children: null
    };

    constructor(private httpService: Http){
    }

    getPassangers(): Observable<Passanger[]> {
        return this.httpService
            .get(PASSANGER_API)
            .map((response: Response) => {
                return response.json();
            });
    }

    updatePassangers(passanger: Passanger): Observable<Passanger> {
        return this.httpService
            .put(`${PASSANGER_API}/${passanger.id}`, passanger)
            .map((response: Response) => {
                return response.json();
            });
    }

    removePassangers(passanger: Passanger): Observable<Passanger> {
        return this.httpService
            .delete(`${PASSANGER_API}/${passanger.id}`)
            .map((response: Response) => {
                return response.json();
            });
    }

    addPassanger(): Observable<Passanger> {
        return this.httpService
            .post(`${PASSANGER_API}`, this.newPassanger)
            .map((response: Response) => response.json());
    }
}