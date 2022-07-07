import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetComponent } from './set/set.component';

@NgModule({
  declarations: [SetComponent],
  imports: [CommonModule],
  exports: [SetComponent],
})
export class SharedModule {}
