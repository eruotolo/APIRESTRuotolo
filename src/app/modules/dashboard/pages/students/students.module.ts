import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentsTableComponent } from './students-table/students-table.component';
import { PipesModule } from '@shared/pipes/pipes.module';
import { StudentsRoutingModule } from '@modules/dashboard/pages/students/students-routing.module';

// MODULOS NECESARIOS PARA FORMULARIOS.
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// MODULOS NECESARIOS PARA TABLES.
import { MatTableModule } from '@angular/material/table';

// IMPORTAR MATDIALOG MODULE
import { MatDialogModule } from '@angular/material/dialog';
import { StudentsDialogComponent } from './students-dialog/students-dialog.component';

@NgModule({
    declarations: [
        StudentsComponent,
        StudentsTableComponent,
        StudentsDialogComponent,
    ],
    exports: [StudentsComponent],
    imports: [
        CommonModule,
        MatDialogModule,
        MatIconModule,
        MatTableModule,
        PipesModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        StudentsRoutingModule,
    ],
})
export class StudentsModule {}
