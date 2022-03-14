import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-walk-through-content',
  templateUrl: './walk-through-content.component.html',
  styleUrls: ['./walk-through-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WalkThroughContentComponent {
@Input() categoryText:  string = ''
@Input() contentText: string = ''

}
