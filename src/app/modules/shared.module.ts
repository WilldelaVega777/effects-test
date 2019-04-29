
//----------------------------------------------------------------------------
// Imports Section (Angular)
//----------------------------------------------------------------------------
import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { RouterModule }     from '@angular/router';


//----------------------------------------------------------------------------
// Imports Section (Module Components)
//----------------------------------------------------------------------------
import { NavbarComponent }  from 'src/app/components/shared/navbar/navbar.component';

//----------------------------------------------------------------------------
// Module Configuration Section
//----------------------------------------------------------------------------
@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [],
    declarations: [
        NavbarComponent
    ],
    exports: [
        NavbarComponent
    ]
})
//----------------------------------------------------------------------------
// Module Export Section
//----------------------------------------------------------------------------
export class SharedModule {}
