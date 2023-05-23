import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsTableComponent } from './jobs-table/jobs-table.component';
import { EditJobComponent } from './edit-job/edit-job.component';

const routes: Routes = [
  {
    path: '',
    component: JobsTableComponent,
  },
  {
    path: 'new',
    component: EditJobComponent,
  },
  { path: ':jonId', component: EditJobComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsRoutingModule {}