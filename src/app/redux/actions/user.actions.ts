//----------------------------------------------------------------------
// Imports Section
//----------------------------------------------------------------------
import { Action }                   from '@ngrx/store';
import { User }                     from 'src/app/models/classes/user';


//----------------------------------------------------------------------
// Action Constants Section
//----------------------------------------------------------------------
export const INIT              = '@ngrx/store/init';
export const USER_LOAD         = '[User] Load User';
export const USER_LOAD_FAIL    = '[User] Load User Fail';
export const USER_LOAD_SUCCESS = '[User] Load User Success';


//----------------------------------------------------------------------
// Action Classes Section
//----------------------------------------------------------------------
export class InitAction implements Action
{
    readonly type = INIT;
}
//----------------------------------------------------------------------
export class LoadUser implements Action
{
    readonly type = USER_LOAD;

    public userId : string;

    constructor(pUserId: string)
    {
        this.userId = pUserId;
    }
}
//----------------------------------------------------------------------
export class LoadUserFail implements Action
{
    readonly type = USER_LOAD_FAIL;

    public payload: any;

    constructor(pPayload: any)
    {
        this.payload = pPayload;
    }
}
//----------------------------------------------------------------------
export class LoadUserSuccess implements Action
{
    readonly type = USER_LOAD_SUCCESS;

    public payload: User;

    constructor(pPayload: User)
    {
        this.payload = pPayload;
    }
}
//----------------------------------------------------------------------
// Valid Types (Union) Section
//----------------------------------------------------------------------
export type AvailableActions =
    InitAction | LoadUser | LoadUserFail | LoadUserSuccess;
