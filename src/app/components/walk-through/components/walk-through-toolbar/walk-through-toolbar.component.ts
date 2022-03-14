import { Output, ChangeDetectionStrategy, Component, ViewEncapsulation, EventEmitter } from '@angular/core';
import { userCategories } from 'src/app/shared/model/user-categories';

@Component({
  selector: 'app-walk-through-toolbar',
  templateUrl: './walk-through-toolbar.component.html',
  styleUrls: ['./walk-through-toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WalkThroughToolbarComponent  {
  @Output() mouseOverIcon = new EventEmitter<userCategories>();
  userCategories = userCategories;
}
