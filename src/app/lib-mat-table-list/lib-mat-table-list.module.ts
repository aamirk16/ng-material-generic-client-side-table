import { NgModule } from '@angular/core';
import { LibMatTableListComponent } from './lib-mat-table-list.component';
import { WindowProvider } from '../window.service';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [LibMatTableListComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  providers: [WindowProvider],
  exports: [LibMatTableListComponent],
})
export class LibMatTableListModule {}
