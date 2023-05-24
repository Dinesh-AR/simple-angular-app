import { EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { JobsState } from './reducers/jobs.reducer';
import * as fromJobs from './reducers/jobs.reducer';
import { Job } from './model/job';

export const selectJobsState = createFeatureSelector<JobsState>('jobs');

export const selectAllJobs = createSelector(
  selectJobsState,
  fromJobs.selectAll
);

export const selectJobById = createSelector(
  selectJobsState,
  (state: EntityState<Job>, props: { id: number }) => {
    const entities = fromJobs.selectEntities(state);
    return entities[props.id];
  }
);
