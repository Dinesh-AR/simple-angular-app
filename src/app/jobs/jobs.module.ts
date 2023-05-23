import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ContentTypeInterceptor } from './shared/http-interceptor';
import { JobsTableComponent } from './jobs-table/jobs-table.component';
import { EditJobComponent } from './edit-job/edit-job.component';

@NgModule({
  declarations: [JobsTableComponent, EditJobComponent],
  imports: [CommonModule, JobsRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ContentTypeInterceptor,
      multi: true,
    },
  ],
})
export class JobsModule {}
