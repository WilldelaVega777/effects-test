//----------------------------------------------------------------------------
// Imports Section (Angular)
//----------------------------------------------------------------------------
import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';

//----------------------------------------------------------------------------
// Imports Section (Module Components)
//----------------------------------------------------------------------------
import { ListaComponent }   from '../views/usuarios/lista/lista.component';
import { UsuarioComponent } from '../views/usuarios/usuario/usuario.component';


//----------------------------------------------------------------------------
// Module Configuration Section
//----------------------------------------------------------------------------
@NgModule({
    imports: [
        CommonModule
    ],
    providers: [],
    declarations: [
        ListaComponent,
        UsuarioComponent
    ],
    exports: [
        ListaComponent,
        UsuarioComponent
    ]
})
//----------------------------------------------------------------------------
// Module Export Section
//----------------------------------------------------------------------------
export class UsuarioModule {}
