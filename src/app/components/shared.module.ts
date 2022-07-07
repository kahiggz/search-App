import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetComponent } from './set/set.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [SetComponent, DetailsComponent],
  imports: [CommonModule],
  exports: [SetComponent, DetailsComponent],
})
export class SharedModule {}
