import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { PassangerDashboardComponent } from './containers/passanger-dashboard/passanger-dashboard.component';
import { PassangerCountComponent } from './components/passanger-count/passanger-count.component';
import { PassangerDetailComponent } from './components/passanger-detail/passanger-detail.component';
import { PassangerViewerComponent } from './containers/viewer/viewer.component';
import { PassangerFormComponent } from './components/form/form.component';

import { PassangerDashboardService } from './passanger-dashboard.service';

const routes: Route[] = [
    {
        path: 'passangers',
        children: [
            {
                path: '',
                component: PassangerDashboardComponent,
            },
            {
                path: ':id',
                component: PassangerViewerComponent
            }
        ]
    }
]

@NgModule({
    declarations: [ //components
        PassangerDashboardComponent,
        PassangerDetailComponent,
        PassangerCountComponent,
        PassangerViewerComponent,
        PassangerFormComponent
    ],
    imports: [ // modulos
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    providers: [ // services
        PassangerDashboardService,
    ]
})

export class PassangerDashboardModule {

}