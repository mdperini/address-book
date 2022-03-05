import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy  } from '@angular/core';

@Component({
  selector: 'app-address-book-footer',
  templateUrl: './address-book-footer.component.html',
  styleUrls: ['./address-book-footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressBookFooterComponent {
  @Input() entries: number = 0;
}
