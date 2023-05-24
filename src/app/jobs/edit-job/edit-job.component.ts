import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectJobById } from '../jobs.selectors';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Job } from '../model/job';
import { JobActions } from '../action-types';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss'],
})
export class EditJobComponent implements OnInit {
  selectedJobId = 0;
  mode = '';
  selectedJob$;
  selectedJob: Job;
  jobForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    if (this.route.snapshot.queryParams) {
      this.mode = this.route.snapshot.queryParams['mode'];
    }
    if (this.mode == 'edit') {
      this.selectedJobId = this.route.snapshot.params['jobId'];
      this.selectedJob$ = this.store.select(selectJobById, {
        id: this.selectedJobId,
      });
    } else {
      this.mode = 'new';
    }
  }
  ngOnInit() {
    this.jobForm = this.formBuilder.group({
      job_number: ['', Validators.required],
      job_title: ['', Validators.required],
      job_start_date: ['', Validators.required],
      job_close_date: ['', Validators.required],
      experience_required: [false],
      number_of_openings: ['', Validators.required],
      job_notes: [''],
    });

    if (this.mode == 'edit') {
      this.jobForm.get('job_number')?.disable();
      this.selectedJob$?.subscribe((val) => {
        if (val) this.selectedJob = val;
        this.jobForm.patchValue(val as Job);
      });
    }
  }

  submitForm() {
    if (this.jobForm.valid) {
      if (this.mode === 'edit') {
        const updateJob = { ...this.selectedJob, ...this.jobForm.value };
        this.store.dispatch(JobActions.jobUpdated(updateJob));
        console.log(updateJob);
      }
      this.router.navigate(['/jobs']);
    }
  }

  onCancel() {
    this.router.navigate(['/jobs']);
  }
}
