import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-jobs-table',
  templateUrl: './jobs-table.component.html',
  styleUrls: ['./jobs-table.component.scss'],
})
export class JobsTableComponent implements OnInit {
  constructor(private jobsService: JobsService) {}
  ngOnInit() {
    this.jobsService.findAllJobs().subscribe(console.log);
  }
}
