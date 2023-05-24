import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { Observable, finalize, first, tap } from 'rxjs';
import { loadAllJobs } from './jobs.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class JobsResolver implements Resolve<any> {
  loading = false;
  constructor(private store: Store<AppState>) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      tap(() => {
        if (!this.loading) {
          this.loading = true;
          this.store.dispatch(loadAllJobs());
        }
      }),
      first(),
      finalize(() => (this.loading = false))
    );
  }
}
