//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { User } from 'src/app/models/classes/user';

//---------------------------------------------------------------------
// Interface Definition Section
//---------------------------------------------------------------------
export interface IUsersState
{
    users           : User[];
    loaded          : boolean;
    loading         : boolean;
    error           : any;
}
