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
import { ofType }                           from '@ngrx/effects';
import { map }                              from 'rxjs/operators';
import { switchMap }                        from 'rxjs/operators';
import { catchError }                       from 'rxjs/operators';
import { delay }                            from 'rxjs/operators';
import { of }                               from 'rxjs';
import * as UserActions                     from '../actions/user.actions';

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
export class UserEffects
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
    private loadUser$;

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
        this.loadUser$ = this.actions$.pipe(
            ofType(UserActions.USER_LOAD),
            delay(1200),
            switchMap((action: UserActions.LoadUser) => {
                return this.usersService.getUserById(action.userId)
                .pipe(
                    map(user => new UserActions.LoadUserSuccess(user)),
                    catchError(error => of(new UserActions.LoadUserFail(error)))
                );
            })
        );
    }
}
