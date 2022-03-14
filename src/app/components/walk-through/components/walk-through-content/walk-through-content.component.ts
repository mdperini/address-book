import { Component, OnInit, Input } from '@angular/core';
import { userCategories } from 'src/app/shared/model/user-categories';
import { RandomUserService } from 'src/app/shared/service/random-user-service';

@Component({
  selector: 'app-walk-through-content',
  templateUrl: './walk-through-content.component.html',
  styleUrls: ['./walk-through-content.component.scss']
})
export class WalkThroughContentComponent implements OnInit {
@Input() selectedCategory: userCategories = userCategories.emailAddress;
@Input() personsContent: string = ''

constructor(private randomUserService: RandomUserService){}

  ngOnInit(): void {
  }

  public get categoryText() { return this.randomUserService.getuserCategoryText(this.selectedCategory); }

}
