import {AfterContentChecked, Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {MockService} from '../../services/mock/mock.service';
import {LoggedUser} from '../../models/loggedUser.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, AfterContentChecked {

  showDropdown: boolean;
  loggedUser: LoggedUser;
  initials: string;

  constructor(private elementRef: ElementRef,
              private mockService: MockService) { }

  ngOnInit() {
    this.initials = '';
    this.closeDropdown();

    // Get the first (and unique in this case) user
    this.mockService.index('logged-user').subscribe((value: LoggedUser[]) => {
      this.loggedUser = value[0] as LoggedUser;
    });
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.code === 'Escape') {
      this.closeDropdown();
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside && this.showDropdown) {
      this.closeDropdown();
    }
  }

  closeDropdown() {
    this.showDropdown = false;
  }

  openDropdown() {
    this.showDropdown = true;
  }

  switchDropdown() {
    this.showDropdown ? this.closeDropdown() : this.openDropdown();
  }

  ngAfterContentChecked(): void {
    if (!this.loggedUser) {
      return;
    }

    this.initials = this.loggedUser.name.split(' ')
      .map(value => value.substr(0, 1))
      .join('')
      .substr(0, 2);
  }
}
