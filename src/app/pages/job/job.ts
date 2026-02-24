import { Component } from '@angular/core';
import { JobService } from '../../../services/job-service';
import { JobInterface } from '../../../shared/models/job-interface';
import { JobList } from './job-list/job-list';


@Component({
  selector: 'app-job',
  imports: [JobList],
  templateUrl: './job.component.html',
  styleUrl: './job.css',
})
export class Job {
public jobs: Array<JobInterface> = [];
  constructor(private jobService: JobService) {}

  ngOnInit() {
  }
}
