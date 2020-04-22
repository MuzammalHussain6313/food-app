import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import {ReviewComponent} from '../../charityHouse/donner-list/review/review.component';
import {PopoverComponent} from '../popover/popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      }
    ])
  ],
  entryComponents: [PopoverComponent],
  declarations: [ListPage, PopoverComponent]
})
export class ListPageModule {}
