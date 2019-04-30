//----------------------------------------------------------------------------
// Imports Section
//----------------------------------------------------------------------------
import { Component }                    from '@angular/core';
import { OnInit }                       from '@angular/core';
import { OnDestroy }                    from '@angular/core';
import { ActivatedRoute }               from '@angular/router';

//----------------------------------------------------------------------------
// Imports Section (Redux)
//----------------------------------------------------------------------------
import { Store }                        from '@ngrx/store';
import { IAppState }                    from 'src/app/redux/interfaces/app.state';
import { IUserState }                   from './../../../redux/interfaces/user.state';
import * as UserActions                 from 'src/app/redux/actions/user.actions';
import { Subscription }                 from 'rxjs';
import { filter }                       from 'rxjs/operators';
import { map }                          from 'rxjs/operators';

//----------------------------------------------------------------------------
// Imports Section (App)
//----------------------------------------------------------------------------
import { User }                         from 'src/app/models/classes/user';

//----------------------------------------------------------------------------
// Component Configuration Section
//----------------------------------------------------------------------------
@Component({
    selector: 'usuario',
    templateUrl: 'usuario.component.html',
    styleUrls: ['usuario.component.css'],
})
//----------------------------------------------------------------------------
// Component Class Section
//----------------------------------------------------------------------------
export class UsuarioComponent implements OnInit, OnDestroy
{
    //------------------------------------------------------------------------
    // Public Fields Section
    //------------------------------------------------------------------------
    public id                               : string;
    public user                             : User;
    public loading                          : boolean;
    public error                            : any;


    //------------------------------------------------------------------------
    // Private Fields Section
    //------------------------------------------------------------------------
    private store                   : Store<IAppState>;
    private router                  : ActivatedRoute;
    private user$                   : Subscription;

    //------------------------------------------------------------------------
    // Constructor Method Section
    //------------------------------------------------------------------------
    constructor(st: Store<IAppState>, rt: ActivatedRoute)
    {
        this.store  = st;
        this.router = rt;

        this.user   = new User();
    }


    //------------------------------------------------------------------------
    // Component Lifecycle Eventhandler Methods Section
    //------------------------------------------------------------------------
    ngOnInit()
    {
        this.router.params
        .subscribe(params => {
            this.id = params['id'];
            this.store.dispatch(new UserActions.LoadUser(this.id));
        });

        this.user$ = this.store
        .pipe(
            filter(state => state.user != null),
            map(state => state.user)
        )
        .subscribe((response: IUserState) => {
            this.user       = response.user;
            this.loading    = response.loading;
            this.error      = response.error;
        });
    }
    //------------------------------------------------------------------------
    ngOnDestroy()
    {
        this.user$.unsubscribe();
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
