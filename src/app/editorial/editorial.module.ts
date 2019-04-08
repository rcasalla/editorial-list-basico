import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorialListComponent } from './editorial-list/editorial-list.component';

import { EditorialService } from './editorial.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [       
        CommonModule,
        FormsModule
    ],
    declarations: [EditorialListComponent],
    providers: [EditorialService],
    exports:[EditorialListComponent]
})
export class EditorialModule {}
