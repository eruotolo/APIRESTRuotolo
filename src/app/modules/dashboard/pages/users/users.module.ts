import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [UsersComponent],
    exports: [UsersComponent],
    imports: [CommonModule, MatButtonModule],
})
export class UsersModule {}
