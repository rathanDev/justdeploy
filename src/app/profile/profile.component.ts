import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DateRange } from '../model/dateRange.model';
import { RegistrationInfo } from '../model/registrationInfo.model';
import { DataService } from '../service/data.service';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit, OnDestroy {
  loggedInUser: RegistrationInfo | undefined;
  sub: Subscription | undefined;

  availabilityForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private sharedService: SharedService
  ) {
    this.availabilityForm = this.fb.group({
      av: ['', []],
    });
  }

  ngOnInit() {
    this.sub = this.sharedService.loggedInUser$.subscribe(
      (info: RegistrationInfo) => {
        this.loggedInUser = info;
      }
    );
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  saveAvailability() {
    const text = this.availabilityForm.value.av;
    const lines = text.split('\n');
    const ranges: DateRange[] = [];

    for (const line of lines) {
      const dateRange: DateRange = this.parseLine(line);
      console.log(dateRange);
      ranges.push(dateRange);
    }

    
  }

  parseLine(line: string): DateRange {
    const regex =
      /^(\d{4}-\d{2}-\d{2})from(\d{2}:\d{2}:\d{2})to(\d{2}:\d{2}:\d{2})$/;
    const match = line.match(regex);

    if (!match) {
      return DateRange.empty();
    }

    const datePart = match[1];
    const fromTime = match[2];
    const toTime = match[3];

    const from = new Date(`${datePart}T${fromTime}`);
    const to = new Date(`${datePart}T${toTime}`);

    if (!isNaN(from.getTime()) || !isNaN(to.getTime())) {
      return DateRange.empty();
    }

    return new DateRange(from, to);
  }
}
