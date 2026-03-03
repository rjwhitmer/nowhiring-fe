import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Job } from './pages/job/job';
import { JobList } from './pages/job/job-list/job-list';
import { Content } from '../app/layouts/content/content.component';
import { Login } from './pages/login/login.component';
import { Employee } from './pages/signup/employee/employee.component';
import { Company } from './pages/signup/company/company.component';
import { Signup } from './pages/signup/signup.component';

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: 'signup',
        component: Signup,
        children: [
        ]
    },
    {
        path: 'signup/employee',
        component: Employee
    },
    {
        path: 'signup/company',
        component: Company
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
