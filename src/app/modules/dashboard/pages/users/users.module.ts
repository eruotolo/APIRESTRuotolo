import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { MatButtonModule } from '@angular/material/button';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
    declarations: [UsersComponent, UserProfileComponent],
    exports: [UsersComponent],
    imports: [CommonModule, MatButtonModule],
})
export class UsersModule {}
