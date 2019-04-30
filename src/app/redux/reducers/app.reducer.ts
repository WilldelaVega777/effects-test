//-------------------------------------------------------------------------------------
// Imports Section:
//-------------------------------------------------------------------------------------
import { ActionReducerMap }         from '@ngrx/store';
import { IAppState }                from '../interfaces/app.state';
import { usersReducer }             from './users.reducer';
import { userReducer }              from './user.reducer';


//-------------------------------------------------------------------------------------
// Reducer Function Definition Section:
//-------------------------------------------------------------------------------------
export const appReducers: ActionReducerMap<IAppState> =
{
    users   : usersReducer,
    user    : userReducer
};
