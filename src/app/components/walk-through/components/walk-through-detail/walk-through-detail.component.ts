import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { textConst } from 'src/app/shared/common/textConst';
import { addressBook } from 'src/app/shared/model/address-book';
import { ButtonActions } from 'src/app/shared/model/button-actions';
import { RandomUserService } from 'src/app/shared/service/random-user-service';

@Component({
  selector: 'app-walk-through-detail',
  templateUrl: './walk-through-detail.component.html',
  styleUrls: ['./walk-through-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WalkThroughDetailComponent implements OnInit {
  ButtonActions = ButtonActions;
  
  constructor(private titleService:Title, 
               private randomUserService: RandomUserService) { }

  public randomUser$ : Observable<addressBook[]> = this.randomUserService.fetchRandomUser();

  ngOnInit(): void {
    this.titleService.setTitle(textConst.walkThrough.title);    
  }            

  public get pageNumber() { return this.randomUserService.pageNumber; }


  onPageRequest(newValue: ButtonActions | any): void {
    this.randomUser$ = this.randomUserService.fetchRandomUser(newValue);
  }

}
