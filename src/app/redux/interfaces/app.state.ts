//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { IUsersState }                      from './users.state';
import { IUserState }                       from './user.state';

//---------------------------------------------------------------------
// Interface Definition Section
//---------------------------------------------------------------------
export interface IAppState
{
    users   :  IUsersState;
    user    :  IUserState;
}
