import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../service/data.service';
import { SharedService } from '../service/shared.service';
import { RegistrationInfo } from '../model/registrationInfo.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit, OnDestroy {
  loggedInUser: RegistrationInfo | undefined;
  sub: Subscription | undefined;

  constructor(
    private dataService: DataService,
    private sharedService: SharedService
  ) {}

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
}
