import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { emptyAddressBookEntry } from 'src/app/shared/data/empty-address-book-entry';
import { addressBook } from 'src/app/shared/model/address-book';
import { userCategories } from 'src/app/shared/model/user-categories';
import { RandomUserService } from 'src/app/shared/service/random-user-service';

@Component({
  selector: 'app-walk-through-content',
  templateUrl: './walk-through-content.component.html',
  styleUrls: ['./walk-through-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WalkThroughContentComponent implements OnInit, OnDestroy {
  categoryText: string = '';
  contentText: string = '';
  subscription: Subscription = new Subscription();

  constructor(private randomUserService: RandomUserService,
              private chgDetRef: ChangeDetectorRef){}

  ngOnInit(): void {
    this.randomUserService.walkThrough.subscribe( (walkThrough => {
      this.categoryText = this.randomUserService.getUserCategoryText(walkThrough.userCategory);
      this.contentText = this.randomUserService.getUserContentText(walkThrough.userCategory, walkThrough.addressBook);
      this.chgDetRef.detectChanges();
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
