import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemeTypes } from 'src/app/shared/model/theme-types';

@Component({
  selector: 'app-walk-through-header',
  templateUrl: './walk-through-header.component.html',
  styleUrls: ['./walk-through-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WalkThroughHeaderComponent implements OnInit {
  @Input() toggleSwitch: ThemeTypes = ThemeTypes.Light;
  constructor() { }

  ngOnInit(): void {
  }

}
