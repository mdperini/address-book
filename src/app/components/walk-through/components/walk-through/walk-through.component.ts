import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { textConst } from 'src/app/shared/common/textConst';
import { emptyAddressBookEntry } from 'src/app/shared/data/empty-address-book-entry';
import { emptyAddressBookSimpleEntry } from 'src/app/shared/data/empty-address-book-simple-entry';
import { addressBook } from 'src/app/shared/model/address-book';
import { ButtonActions } from 'src/app/shared/model/button-actions';
import { ThemeTypes } from 'src/app/shared/model/theme-types';
import { userCategories } from 'src/app/shared/model/user-categories';
import { RandomUserService } from 'src/app/shared/service/random-user-service';

@Component({
  selector: 'app-walk-through',
  templateUrl: './walk-through.component.html',
  styleUrls: ['./walk-through.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WalkThroughComponent implements OnInit {
  ButtonActions = ButtonActions;  
  ThemeTypes = ThemeTypes;
  title: string = '';
  
  constructor(private titleService:Title, 
               private randomUserService: RandomUserService) { }

  public randomUser$ : Observable<addressBook[]> = this.randomUserService.fetchRandomUser();

  ngOnInit(): void {
    this.title = textConst.walkThrough.title;
    this.titleService.setTitle(textConst.walkThrough.title);    
  }            

  
  public get pageNumber() { return this.randomUserService.pageNumber; }


  onPageRequest(newValue: ButtonActions | any): void {
    this.randomUser$ = this.randomUserService.fetchRandomUser(newValue);    
  }

  onmouseOver(category: userCategories, randomPerson: addressBook): void {
    this.randomUserService.walkThrough.next( {
      userCategory: category,
      addressBook: randomPerson
    })
  }
}
