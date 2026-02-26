import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInterface } from '../shared/models/user-interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {}

    login(email: string, password: string): Observable<UserInterface> {
        return this.http.post<UserInterface>('http://localhost:3000/login', 
            {
                "user": {
                    "email": email,
                    "password": password
                }
            }
        )
    }
}