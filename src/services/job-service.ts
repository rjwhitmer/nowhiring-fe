import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobInterface } from '../shared/models/job-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobService {
	constructor(private http: HttpClient) {}

	getAll(): Observable<Array<JobInterface>>{
		return this.http.get<Array<JobInterface>>('http://localhost:3000/jobs')
	}
}
