//------------------------------------------------------------------------------------------------------
// Imports Section (Angular Libraries)
//------------------------------------------------------------------------------------------------------
import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { RouterModule }                     from '@angular/router';
import { AppRoutingModule }                 from './routes/app-routing.module';
import { HttpClientModule }                 from '@angular/common/http';

//------------------------------------------------------------------------------------------------------
// Imports Section (Redux)
//------------------------------------------------------------------------------------------------------
import { StoreModule }                      from '@ngrx/store';
import { StoreDevtoolsModule }              from '@ngrx/store-devtools';
import { environment }                      from '../environments/environment';

//------------------------------------------------------------------------------------------------------
// Imports Section (App Modules)
//------------------------------------------------------------------------------------------------------
import { SharedModule }                     from './modules/shared.module';
import { UsuarioModule }                    from './modules/usuario.module';

//------------------------------------------------------------------------------------------------------
// Imports Section (App Components)
//------------------------------------------------------------------------------------------------------
import { AppComponent }                     from './views/main/app.component';


//------------------------------------------------------------------------------------------------------
// Module Configuration Section
//------------------------------------------------------------------------------------------------------
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        SharedModule,
        UsuarioModule,
        AppRoutingModule,
        //StoreModule.forRoot(appReducers),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
//------------------------------------------------------------------------------------------------------
// Class Section
//------------------------------------------------------------------------------------------------------
export class AppModule { }
