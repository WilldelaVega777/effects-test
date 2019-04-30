//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { User } from 'src/app/models/classes/user';

//---------------------------------------------------------------------
// Interface Definition Section
//---------------------------------------------------------------------
export interface IUserState
{
    user            : User;
    loaded          : boolean;
    loading         : boolean;
    error           : any;
}
