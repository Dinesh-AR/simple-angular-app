import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/jobs.service';
import { Job } from '../model/job';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectAllJobs } from '../jobs.selectors';

@Component({
  selector: 'app-jobs-table',
  templateUrl: './jobs-table.component.html',
  styleUrls: ['./jobs-table.component.scss'],
})
export class JobsTableComponent implements OnInit {
  jobs$: Observable<Job[]> | undefined;
  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.jobs$ = this.store.pipe(select(selectAllJobs));
  }
}
