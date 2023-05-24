import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ContentTypeInterceptor } from './shared/http-interceptor';
import { JobsTableComponent } from './jobs-table/jobs-table.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { JobsResolver } from './jobs.resolver';
import { JobsEffects } from './jobs.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { jobsReducer } from './reducers/jobs.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [JobsTableComponent, EditJobComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([JobsEffects]),
    StoreModule.forFeature('jobs', jobsReducer),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ContentTypeInterceptor,
      multi: true,
    },
    JobsResolver,
    JobsEffects,
  ],
})
export class JobsModule {}
