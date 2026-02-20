import { Component } from '@angular/core';
import { JobService } from '../../services/job-service';
import { JobInterface } from '../../shared/models/job-interface';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.css',
})
export class Home {
	public jobs: Array<JobInterface> = [];
	constructor(private jobService: JobService) {}

	ngOnInit() {
		this.loadJobs();
		console.log("jobs", this.jobs)
	}

	loadJobs() {
		this.jobService.getAll().subscribe({
			next: data => {
				this.jobs = data;
			},
			error: (error) => {
				console.log(error)
			},
			complete: () => {
				console.log("Jobs loaded")
			}
		})
	}
}
