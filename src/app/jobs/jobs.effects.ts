import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { JobsService } from './services/jobs.service';
import { JobActions } from './action-types';
import { concatMap, map } from 'rxjs';
import { allJobsLoaded } from './jobs.actions';

@Injectable()
export class JobsEffects {
  constructor(private actions$: Actions, private jobsService: JobsService) {}
  loadJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobActions.loadAllJobs),
      concatMap((action) => this.jobsService.findAllJobs()),
      map((jobs) => allJobsLoaded({ jobs }))
    )
  );
  updateJob$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(JobActions.jobUpdated),
        concatMap((action) =>
          this.jobsService.updateJob(
            action.update.id as number,
            action.update.changes
          )
        )
      ),
    { dispatch: false }
  );
  createJob$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(JobActions.jobCreated),
        concatMap((action) => this.jobsService.createJob(action.create))
      ),
    { dispatch: false }
  );
}
