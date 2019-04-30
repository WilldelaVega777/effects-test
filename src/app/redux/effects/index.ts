//----------------------------------------------------------------
// Imports Section
//----------------------------------------------------------------
import { UsersEffects }             from './users.effects';
import { UserEffects}               from './user.effects';

//----------------------------------------------------------------
// Exports Section
//----------------------------------------------------------------
export const effectsArray: any[] = [
    UsersEffects,
    UserEffects
];
//----------------------------------------------------------------
export *                            from './users.effects';
export *                            from './user.effects';
