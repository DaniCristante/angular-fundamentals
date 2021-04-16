import { Passanger } from './models/passanger.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

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

    getPassangers(): Promise<Passanger[]> {
        return this.httpService
            .get(PASSANGER_API)
            .toPromise()
            .then((response: Response) => {
                return response.json();
            });
    }

    updatePassangers(passanger: Passanger): Promise<Passanger> {
        let headers = new Headers({
            'Content-type': 'application/json'
        });
        let options = new RequestOptions({
            headers: headers
        });
        return this.httpService
            .put(`${PASSANGER_API}/${passanger.id}`, passanger, options)
            .toPromise()
            .then((response: Response) => {
                return response.json();
            });
    }

    removePassangers(passanger: Passanger): Promise<Passanger> {
        return this.httpService
            .delete(`${PASSANGER_API}/${passanger.id}`)
            .toPromise()
            .then((response: Response) => {
                return response.json();
            });
    }

    addPassanger(): Promise<Passanger> {
        return this.httpService
            .post(`${PASSANGER_API}`, this.newPassanger)
            .toPromise()
            .then((response: Response) => response.json());
    }
}