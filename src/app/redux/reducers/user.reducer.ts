//-------------------------------------------------------------------------------------
// Imports Section:
//-------------------------------------------------------------------------------------
import { IUserState }                       from '../interfaces/user.state';
import * as StateActions                    from '../actions/user.actions';

//-------------------------------------------------------------------------------------
// Reducer Function Definition Section:
//-------------------------------------------------------------------------------------
export function userReducer(
    state: IUserState,
    action:  StateActions.AvailableActions
) : IUserState
{
    switch ( action.type )
    {
        case StateActions.INIT:
            return {
                user    : null,
                loaded  : false,
                loading : false,
                error   : null
            };

        case StateActions.USER_LOAD:
            return {
                ...state,
                loading     : true,
                error       : null
            };

        case StateActions.USER_LOAD_SUCCESS:
            return {
                ...state,
                loading     : false,
                loaded      : true,
                user        : {
                    ...action.payload
                }
            };

        case StateActions.USER_LOAD_FAIL:
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
