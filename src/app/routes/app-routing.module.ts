//----------------------------------------------------------------------------
// Imports Section (Angular)
//----------------------------------------------------------------------------
import { NgModule }                 from '@angular/core';
import { Routes }                   from '@angular/router';
import { RouterModule }             from '@angular/router';


//----------------------------------------------------------------------------
// Imports Section (App Components)
//----------------------------------------------------------------------------
import { ListaComponent } from '../views/usuarios/lista/lista.component';
import { UsuarioComponent } from '../views/usuarios/usuario/usuario.component';


//----------------------------------------------------------------------------
// Routes Definition Section
//----------------------------------------------------------------------------
const routes: Routes = [
    { path: 'home',         component: ListaComponent   },
    { path: 'usuario/:id',  component: UsuarioComponent },
    { path: '**', redirectTo: 'home' }
];


//----------------------------------------------------------------------------
// Module Configuration Section
//----------------------------------------------------------------------------
@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [ RouterModule ]
})
//----------------------------------------------------------------------------
// Module Export Section
//----------------------------------------------------------------------------
export class AppRoutingModule {}
