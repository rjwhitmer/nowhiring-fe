import { Router } from "@angular/router";
import { UserInterface } from "../shared/models/user-interface";
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals'
import { inject } from "@angular/core";
import { AuthService } from '../services/authentication-service';

type AppState = { user: UserInterface | undefined };
const initialState: AppState = { user: undefined } 

export const AppStore = signalStore(
    { providedIn: "root" },
    withState(initialState),
    withMethods((store, router = inject(Router), authService = inject(AuthService)) => ({
        login: (email: string, password: string) => {
            authService.login(email, password).subscribe({
                next: data => {
                    console.log('data', data)
                    patchState(store, { user: { email : data.email, name: data.name }} )
                }
            })

            router.navigate([""])
        },
        logout: () => {
            patchState(store, { user: undefined })
            router.navigate(["/login"])
        }
    }))
)