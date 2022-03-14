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
  subscription: Subscription[] = [];
  selectedCategory: userCategories = userCategories.notSet;

  constructor(private randomUserService: RandomUserService,
              private chgDetRef: ChangeDetectorRef){}

  ngOnInit(): void {
    this.subscription.push(this.randomUserService.walkThrough.subscribe( (walkThrough => {
      this.selectedCategory = walkThrough.userCategory;
      this.categoryText = this.randomUserService.getUserCategoryText(walkThrough.userCategory);
      this.contentText = this.randomUserService.getUserContentText(walkThrough.userCategory, walkThrough.addressBook);
      this.chgDetRef.detectChanges();
    })));

    this.subscription.push(this.randomUserService.fetchRandomUser().subscribe( (addressBook => {
      this.contentText = this.randomUserService.getUserContentText(this.selectedCategory, addressBook[0]);
      this.chgDetRef.detectChanges();
    })));
  }

  ngOnDestroy(): void {
    this.subscription.forEach( (s)  => s.unsubscribe());
  }

}
