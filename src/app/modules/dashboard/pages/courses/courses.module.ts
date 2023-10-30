import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesTableComponent } from './courses-table/courses-table.component';
import { PipesModule } from '@shared/pipes/pipes.module';

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
import { CoursesDialogComponent } from './courses-dialog/courses-dialog.component';

@NgModule({
    declarations: [
        CoursesComponent,
        CoursesTableComponent,
        CoursesDialogComponent,
    ],
    exports: [CoursesComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        PipesModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
    ],
})
export class CoursesModule {}
