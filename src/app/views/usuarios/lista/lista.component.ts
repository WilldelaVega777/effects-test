//----------------------------------------------------------------------------
// Imports Section (Angular)
//----------------------------------------------------------------------------
import { Component }                    from '@angular/core';
import { OnInit }                       from '@angular/core';
import { OnDestroy }                    from '@angular/core';

//----------------------------------------------------------------------------
// Imports Section (Redux)
//----------------------------------------------------------------------------
import { Store }                        from '@ngrx/store';
import { IAppState }                    from 'src/app/redux/interfaces/app.state';
import { IUsersState }                  from './../../../redux/interfaces/users.state';
import * as UsersActions                from 'src/app/redux/actions/users.actions';
import { Subscription }                 from 'rxjs';
import { filter }                       from 'rxjs/operators';
import { map }                          from 'rxjs/operators';

//----------------------------------------------------------------------------
// Imports Section (App)
//----------------------------------------------------------------------------
import { UsersService }                 from 'src/app/services/users.service';
import { User }                         from 'src/app/models/classes/user';

//----------------------------------------------------------------------------
// Component Configuration Section
//----------------------------------------------------------------------------
@Component({
    selector: 'lista',
    templateUrl: 'lista.component.html',
    styleUrls: ['lista.component.css'],
})
//----------------------------------------------------------------------------
// Component Class Section
//----------------------------------------------------------------------------
export class ListaComponent implements OnInit, OnDestroy
{
    //------------------------------------------------------------------------
    // Public Fields Section
    //------------------------------------------------------------------------
    public usuarios                         : User[];
    public loading                          : boolean;
    public error                            : any;


    //------------------------------------------------------------------------
    // Private Fields Section
    //------------------------------------------------------------------------
    private usuarioService                  : UsersService;
    private store                           : Store<IAppState>;
    private users$                          : Subscription;


    //------------------------------------------------------------------------
    // Constructor Method Section
    //------------------------------------------------------------------------
    constructor(st: Store<IAppState>, us: UsersService)
    {
        this.store          = st;
        this.usuarioService = us;
    }


    //------------------------------------------------------------------------
    // Component Lifecycle Eventhandler Methods Section
    //------------------------------------------------------------------------
    ngOnInit()
    {
        // Dispatch Actions
        this.store.dispatch(new UsersActions.LoadUsers());

        // Listen for Response(s)
        this.users$ = this.store
        .pipe(
            filter((state: IAppState) => ((state.users != null) && (state.users.users != null))),
            map((state: IAppState) => state.users)
        )
        .subscribe((response: IUsersState) => {
            this.usuarios = response.users;
            this.loading  = response.loading;
            this.error    = response.error;
        });
    }
    //------------------------------------------------------------------------
    ngOnDestroy()
    {
        this.users$.unsubscribe();
    }

    //------------------------------------------------------------------------
    // Eventhandler Methods Section
    //------------------------------------------------------------------------


    //------------------------------------------------------------------------
    // Public Methods Section
    //------------------------------------------------------------------------


    //------------------------------------------------------------------------
    // Private Methods Section
    //------------------------------------------------------------------------


}
