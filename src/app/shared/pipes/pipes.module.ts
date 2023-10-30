import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullnamePipe } from '@shared/pipes/fullname.pipe';
import { UppercasePipe } from './uppercase.pipe';

@NgModule({
    declarations: [FullnamePipe, UppercasePipe],
    exports: [FullnamePipe, UppercasePipe],
    imports: [CommonModule],
})
export class PipesModule {}
