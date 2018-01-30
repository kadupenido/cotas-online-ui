import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutosComponent } from './autos/autos.component';

const routes: Routes = [
    { path: 'autos', component: AutosComponent },
    { path: '', redirectTo: 'autos', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
