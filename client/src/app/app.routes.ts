import { Routes } from "@angular/router";

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/trend',
        pathMatch: 'full'
    },
    {
        path: 'trend',
        loadChildren: () => import('../modules/analysis/analysis.module').then(m => m.AnalysisModule),
    },
]