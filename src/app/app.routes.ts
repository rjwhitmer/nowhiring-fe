import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Job } from './job/job';
import { JobList } from './job/job-list/job-list';

export const routes: Routes = [
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
];
