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
import { Usuario }                          from 'src/app/models/classes/usuario';


//----------------------------------------------------------------------------
// Service Configuration Section
//----------------------------------------------------------------------------
@Injectable({
    providedIn: 'root'
})
//----------------------------------------------------------------------------
// Service Class Section
//----------------------------------------------------------------------------
export class UsuarioService
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
    public getUser(): Observable<Usuario[]>
    {
        const url: string = 'https://reqres.in/api/users';
        return this.httpService.get(`${url}?per_page=10`)
        .pipe(
            map((response: {data: Usuario[]}) => response.data)
        );

    }

}
