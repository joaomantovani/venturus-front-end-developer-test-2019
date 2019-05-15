import {AfterContentChecked, AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DaysOfWeek} from '../../../../../shared/models/daysOfWeek.model';
import {User} from '../../../../../shared/models/user.model';
import {MockService} from '../../../../../shared/services/mock/mock.service';

@Component({
  selector: 'app-field-days',
  templateUrl: './field-days.component.html',
  styleUrls: ['./field-days.component.sass']
})
export class FieldDaysComponent implements OnInit, AfterContentChecked {

  @Input() user: User;
  daysOfWeek: DaysOfWeek;

  weekType: string;

  private weekend = ['Sun', 'Sat'];
  private everyday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  private weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  constructor() { }

  ngOnInit() {
    this.weekType = null;
    this.daysOfWeek = this.user.daysOfWeek;
    this.formatDate();
  }

  private formatDate() {
    if (!this.daysOfWeek.days) {
      return;
    }

    if (this.everyday.every(labelDay => this.daysOfWeek.days.includes(labelDay))) {
      this.weekType = 'everyday';
    } else if (this.weekdays.every(labelDay => this.daysOfWeek.days.includes(labelDay))) {
      this.weekType = 'weekdays';
    } else if (this.weekend.every(labelDay => this.daysOfWeek.days.includes(labelDay))) {
      this.weekType = 'weekend';
    } else {
      this.weekType = 'nothing';
    }
  }

  ngAfterContentChecked(): void {
    if (this.daysOfWeek !== this.user.daysOfWeek && this.daysOfWeek) {
      this.daysOfWeek = this.user.daysOfWeek;
      this.formatDate();
    }
  }
}
