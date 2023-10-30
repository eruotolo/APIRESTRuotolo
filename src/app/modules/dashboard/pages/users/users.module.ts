import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { PipesModule } from '@shared/pipes/pipes.module';
import { UserProfileComponent } from './user-profile/user-profile.component';

// MODULOS NECESARIOS PARA FORMULARIOS.
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

// MODULOS NECESARIOS PARA TABLES.
import { MatTableModule } from '@angular/material/table';

// IMPORTAR MATDIALOG MODULE
import { MatDialogModule } from '@angular/material/dialog';
import { UsersTableComponent } from './users-table/users-table.component';
import { UsersDialogComponent } from './users-dialog/users-dialog.component';

@NgModule({
    declarations: [
        UsersComponent,
        UserProfileComponent,
        UsersTableComponent,
        UsersDialogComponent,
    ],
    exports: [UsersComponent],
    imports: [
        CommonModule,
        PipesModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatDialogModule,
        MatSelectModule,
    ],
})
export class UsersModule {}
