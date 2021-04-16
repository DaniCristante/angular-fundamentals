import { Passanger } from './models/passanger.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

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

    getPassangers(): Observable<Passanger[]> {
        return this.httpService
            .get(PASSANGER_API)
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: any) => Observable.throw(error.json()));
    }

    updatePassangers(passanger: Passanger): Observable<Passanger> {
        let headers = new Headers({
            'Content-type': 'application/json'
        });
        let options = new RequestOptions({
            headers: headers
        });
        return this.httpService
            .put(`${PASSANGER_API}/${passanger.id}`, passanger, options)
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: any) => Observable.throw(error.json()));
    }

    removePassangers(passanger: Passanger): Observable<Passanger> {
        return this.httpService
            .delete(`${PASSANGER_API}/${passanger.id}`)
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: any) => Observable.throw(error.json()));
    }

    addPassanger(): Observable<Passanger> {
        return this.httpService
            .post(`${PASSANGER_API}`, this.newPassanger)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
    }

    getSinglePassanger(passangerId: number): Observable<Passanger> {
        return this.httpService
            .get(`${PASSANGER_API}/${passangerId}`)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json));
            
    }
}