import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/jobs.service';
import { Job } from '../model/job';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectAllJobs } from '../jobs.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs-table',
  templateUrl: './jobs-table.component.html',
  styleUrls: ['./jobs-table.component.scss'],
})
export class JobsTableComponent implements OnInit {
  jobs$: Observable<Job[]> | undefined;
  constructor(private store: Store<AppState>, private router: Router) {}
  ngOnInit() {
    this.jobs$ = this.store.pipe(select(selectAllJobs));
  }

  onRowSelect(job: Job) {
    console.log('onRowSelect ', job);

    this.router.navigate(['/jobs', job.id], { queryParams: { mode: 'edit' } });
  }
  onCreate() {
    this.router.navigate(['/jobs', 'new']);
  }
}
