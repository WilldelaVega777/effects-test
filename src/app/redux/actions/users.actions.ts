//----------------------------------------------------------------------
// Imports Section
//----------------------------------------------------------------------
import { Action }                   from '@ngrx/store';
import { User }                     from 'src/app/models/classes/user';


//----------------------------------------------------------------------
// Action Constants Section
//----------------------------------------------------------------------
export const INIT               = '@ngrx/store/init';
export const USERS_LOAD         = '[Users] Load Users';
export const USERS_LOAD_FAIL    = '[Users] Load Users Fail';
export const USERS_LOAD_SUCCESS = '[Users] Load Users Success';


//----------------------------------------------------------------------
// Action Classes Section
//----------------------------------------------------------------------
export class InitAction implements Action
{
      readonly type = INIT;
}
//----------------------------------------------------------------------
export class LoadUsers implements Action
{
      readonly type = USERS_LOAD;
}
//----------------------------------------------------------------------
export class LoadUsersFail implements Action
{
      readonly type = USERS_LOAD_FAIL;

      public payload: any;

      constructor(pPayload: any)
      {
          this.payload = pPayload;
      }
}
//----------------------------------------------------------------------
export class LoadUsersSuccess implements Action
{
      readonly type = USERS_LOAD_SUCCESS;

      public payload: User[];

      constructor(pPayload)
      {
          this.payload = pPayload;
      }
}
//----------------------------------------------------------------------
// Valid Types (Union) Section
//----------------------------------------------------------------------
export type AvailableActions =
    InitAction | LoadUsers | LoadUsersFail | LoadUsersSuccess;
