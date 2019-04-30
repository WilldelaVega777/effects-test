//----------------------------------------------------------------------------
// Imports Section (Angular)
//----------------------------------------------------------------------------
import { Injectable }                       from '@angular/core';

//----------------------------------------------------------------------------
// Imports Section (Redux)
//----------------------------------------------------------------------------
import { Observable }                       from 'rxjs';
import { Actions }                          from '@ngrx/effects';
import { Effect }                           from '@ngrx/effects';
import { filter }                           from 'rxjs/operators';
import { ofType }                           from '@ngrx/effects';
import { map }                              from 'rxjs/operators';
import { take }                             from 'rxjs/operators';
import { switchMap }                        from 'rxjs/operators';
import { catchError }                       from 'rxjs/operators';
import { of }                               from 'rxjs';
import * as UsersActions                    from '../actions/users.actions';

//----------------------------------------------------------------------------
// Imports Section (App)
//----------------------------------------------------------------------------
import { UsersService }                     from 'src/app/services/users.service';

//----------------------------------------------------------------------------
// Effect Service Configuration Section
//----------------------------------------------------------------------------
@Injectable()
//----------------------------------------------------------------------------
// Effect Classes Section
//----------------------------------------------------------------------------
export class UsersEffects
{
    //------------------------------------------------------------------------
    // Private Fields Section
    //------------------------------------------------------------------------
    private actions$                    : Actions;
    private usersService                : UsersService;

    //------------------------------------------------------------------------
    // Effects Declaration Section
    //------------------------------------------------------------------------
    @Effect()
    private loadUsers$;

    //------------------------------------------------------------------------
    // Constructor Method Section
    //------------------------------------------------------------------------
    constructor(a$: Actions, us: UsersService)
    {
        // Dependency Injections
        this.actions$       = a$;
        this.usersService   = us;

        // Effects Runner
        this.runEffects();
    }


    //------------------------------------------------------------------------
    // Private Methods Section (RunEffects)
    //------------------------------------------------------------------------
    private runEffects() : void
    {
        //--------------------------------------------------------------------
        // Users Effects:
        //--------------------------------------------------------------------
        this.loadUsers$ = this.actions$.pipe(
            ofType(UsersActions.USERS_LOAD),
            switchMap(() => {
                return this.usersService.getUsers()
                .pipe(
                    map(users => new UsersActions.LoadUsersSuccess(users)),
                    catchError(error => of(new UsersActions.LoadUsersFail(error)))
                );
            })
        );
    }
}
