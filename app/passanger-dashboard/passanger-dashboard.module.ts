import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HttpModule } from '@angular/http';

import { PassangerDashboardComponent } from './containers/passanger-dashboard/passanger-dashboard.component';
import { PassangerCountComponent } from './components/passanger-count/passanger-count.component';
import { PassangerDetailComponent } from './components/passanger-detail/passanger-detail.component';

import { PassangerDashboardService } from './passanger-dashboard.service';

@NgModule({
    declarations: [ //components
        PassangerDashboardComponent,
        PassangerDetailComponent,
        PassangerCountComponent,
    ],
    imports: [ // modulos
        CommonModule,
        HttpModule
        
    ],
    exports: [ // export components
        PassangerDashboardComponent,
    ],
    providers: [ // services
        PassangerDashboardService,
    ]
})

export class PassangerDashboardModule {

}