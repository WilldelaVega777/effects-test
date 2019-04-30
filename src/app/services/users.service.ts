//----------------------------------------------------------------------------
// Imports Section (Angular)
//----------------------------------------------------------------------------
import { Injectable }                       from '@angular/core';
import { HttpClient }                       from '@angular/common/http';
import { Observable }                       from 'rxjs';
import { map }                              from 'rxjs/operators';

//----------------------------------------------------------------------------
// Imports Section (App)
//----------------------------------------------------------------------------
import { User }                             from 'src/app/models/classes/user';


//----------------------------------------------------------------------------
// Service Configuration Section
//----------------------------------------------------------------------------
@Injectable({
    providedIn: 'root'
})
//----------------------------------------------------------------------------
// Service Class Section
//----------------------------------------------------------------------------
export class UsersService
{
    //------------------------------------------------------------------------
    // Private Properties Section
    //------------------------------------------------------------------------
    private httpService                         : HttpClient;

    //------------------------------------------------------------------------
    // Constructor Method Section
    //------------------------------------------------------------------------
    constructor(http: HttpClient)
    {
        this.httpService = http;
    }

    //------------------------------------------------------------------------
    // Public Methods Section
    //------------------------------------------------------------------------
    public getUsers(): Observable<User[]>
    {
        const url: string = 'https://reqres.in/api/users';
        return this.httpService.get(`${url}?per_page=10`)
        .pipe(
            map((response: {data: User[]}) => response.data)
        );
    }
    //------------------------------------------------------------------------
    public getUserById(userId: string): Observable<User>
    {
        const url: string = `https://reqres.in/api/users/${userId}`;
        return this.httpService.get(url)
        .pipe(
            map((response: {data: User}) => response.data)
        );
    }
}
