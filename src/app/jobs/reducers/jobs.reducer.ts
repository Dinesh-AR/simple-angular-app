import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Job } from '../model/job';
import { createReducer, on } from '@ngrx/store';
import { JobActions } from '../action-types';

export interface JobsState extends EntityState<Job> {}

const selectId = (entity: Job) => entity.id;

export const adaptor = createEntityAdapter<Job>();

export const initialJobsState = adaptor.getInitialState();

export const jobsReducer = createReducer(
  initialJobsState,
  on(JobActions.allJobsLoaded, (state, action) =>
    adaptor.setAll(action.jobs, state)
  ),
  on(JobActions.jobUpdated, (state, action) =>
    adaptor.updateOne(action.update, state)
  ),
  on(JobActions.jobCreated, (state, action) =>
    adaptor.addOne(action.create, state)
  )
);

export const { selectAll, selectEntities } = adaptor.getSelectors();
