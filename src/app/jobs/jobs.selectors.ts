import { createFeatureSelector, createSelector } from '@ngrx/store';
import { JobsState } from './reducers/jobs.reducer';
import * as fromJobs from './reducers/jobs.reducer';

export const selectJobsState = createFeatureSelector<JobsState>('jobs');

export const selectAllJobs = createSelector(
  selectJobsState,
  fromJobs.selectAll
);
