import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        //ruta principal
        path:'autenticar',
        loadChildren:()=>import('./autenticar/autenticar.routes').then(r=>r.routesAutenticar),    
    },
    {
        //ruta principal
        path:'dashboard',
        loadChildren:()=>import('./dashboard/dashboard.routes').then(r=>r.routesDashboard),
    }
];
