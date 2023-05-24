import { createAction, props } from '@ngrx/store';
import { Job } from './model/job';
import { Update } from '@ngrx/entity';

export const loadAllJobs = createAction('[Jobs Resolver] Load All Jobs');
export const allJobsLoaded = createAction(
  '[Load Jobs Effect] All Jobs Loaded',
  props<{ jobs: Job[] }>()
);

export const jobUpdated = createAction(
  '[Update Job Page] Job Updated',
  props<{ update: Update<Job> }>()
);

export const jobCreated = createAction(
  '[New Job Page] Job Created',
  props<{ create: Job }>()
);
