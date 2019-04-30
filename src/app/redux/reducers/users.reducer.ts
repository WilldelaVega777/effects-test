//-------------------------------------------------------------------------------------
// Imports Section:
//-------------------------------------------------------------------------------------
import { IUsersState }                      from '../interfaces/users.state';
import * as StateActions                    from '../actions/users.actions';

//-------------------------------------------------------------------------------------
// Reducer Function Definition Section:
//-------------------------------------------------------------------------------------
export function usersReducer(
    state: IUsersState,
    action:  StateActions.AvailableActions
) : IUsersState
{
    switch ( action.type )
    {
        case StateActions.INIT:
            return {
                users   : [],
                loaded  : false,
                loading : false,
                error   : null
            };

        case StateActions.USERS_LOAD:
            return {
                ...state,
                loading     : true,
                error       : null
            };

        case StateActions.USERS_LOAD_SUCCESS:
            return {
                ...state,
                loading     : false,
                loaded      : true,
                users       : [...action.payload]
            };

        case StateActions.USERS_LOAD_FAIL:
            return {
                ...state,
                loading     : false,
                loaded      : false,
                error       : {
                    status      : action.payload.status,
                    message     : action.payload.message,
                    url         : action.payload.url
                }
            };

        default:
            return state;
    }
}
