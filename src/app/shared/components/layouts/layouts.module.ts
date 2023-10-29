import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';

@NgModule({
    declarations: [ToolbarComponent, SidebarComponent],
    exports: [ToolbarComponent, SidebarComponent],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        NgOptimizedImage,
        MatMenuModule,
        MatListModule,
        RouterLink,
    ],
})
export class LayoutsModule {}
