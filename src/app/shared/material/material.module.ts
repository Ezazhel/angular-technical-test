import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
const Material = [MatTableModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...Material],
})
export class MaterialModule {}
