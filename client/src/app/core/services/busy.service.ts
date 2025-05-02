import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  loading = false;
  busyRequestCount = 0;

  busy() {
    this.busyRequestCount++;
    this.loading = true;
  }
  idle() {
    this.busyRequestCount--;
    (this.busyRequestCount <= 0) ? this.loading = false : this.loading = true;
  }

}
