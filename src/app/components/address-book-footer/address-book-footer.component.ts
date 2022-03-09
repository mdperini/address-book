import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy  } from '@angular/core';
import { ButtonActions } from 'src/app/shared/model/button-actions';
import { RandomUserService } from 'src/app/shared/service/random-user-service';

@Component({
  selector: 'app-address-book-footer',
  templateUrl: './address-book-footer.component.html',
  styleUrls: ['./address-book-footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressBookFooterComponent {
  ButtonActions = ButtonActions;

  @Output() pageRequest = new EventEmitter<ButtonActions>()

  constructor(private randomUserService: RandomUserService){}

  public get pageNumber() {
    return this.randomUserService.pageNumber;
  }

  public get entriesPerPage() {
    return this.randomUserService.entriesPerPage;
  }
}
