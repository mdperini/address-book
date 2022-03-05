import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-address-book-header',
  templateUrl: './address-book-header.component.html',
  styleUrls: ['./address-book-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressBookHeaderComponent {
  @Input() userName: string = '';
}
