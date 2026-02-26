import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Job } from './pages/job/job';
import { JobList } from './pages/job/job-list/job-list';
import { Content } from '../app/layouts/content/content.component';
import { Login } from './pages/login/login.component';

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        component: Content,
        children: [
            {
                path: '',
                component: Home
            },
            {
                path: 'jobs',
                component: Job,
                children: [
                    {
                        path: '',
                        component: JobList
                    }
                ]
            }
        ]
    }
];
