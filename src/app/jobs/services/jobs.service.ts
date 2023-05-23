import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../model/job';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  constructor(private http: HttpClient) {}
  findAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>('/api/jobs');
  }
  findJobById(jobId: number): Observable<Job> {
    return this.http.get<Job>(`/api/jobs/${jobId}`);
  }
  createJob(newJob: Job): Observable<Job> {
    return this.http.post<Job>('/api/jobs', newJob);
  }
  updateJob(jobId: number, updates: Job): Observable<Job> {
    return this.http.put<Job>(`/api/jobs/${jobId}`, updates);
  }

  deleteJob(jobId: number): Observable<any> {
    return this.http.delete(`/api/jobs/${jobId}`);
  }
}
