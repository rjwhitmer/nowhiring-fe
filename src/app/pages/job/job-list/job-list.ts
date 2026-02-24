import { Component } from '@angular/core';
import { JobService } from '../../../../services/job-service';
import { JobInterface } from '../../../../shared/models/job-interface';

@Component({
  selector: 'app-job-list',
  imports: [],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.css',
})
export class JobList {
public jobs: Array<JobInterface> = [];
  constructor(private jobService: JobService) {}

  ngOnInit() {
    // event?.preventDefault()
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
