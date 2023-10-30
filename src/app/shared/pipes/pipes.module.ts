import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullnamePipe } from '@shared/pipes/fullname.pipe';
import { UppercasePipe } from './uppercase.pipe';
import { CompletenamePipe } from './completename.pipe';

@NgModule({
    declarations: [FullnamePipe, UppercasePipe, CompletenamePipe],
    exports: [FullnamePipe, UppercasePipe, CompletenamePipe],
    imports: [CommonModule],
})
export class PipesModule {}
