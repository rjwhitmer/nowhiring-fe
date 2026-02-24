import { Router } from "@angular/router";
import { User } from "../shared/models/user-interface";
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals'
import { inject } from "@angular/core";

type AppState = { user: User | undefined };
const initialState: AppState = { user: undefined }

export const AppStore = signalStore(
    { providedIn: "root" },
    withState(initialState),
    withMethods((store, router = inject(Router)) => ({
        login: () => {
            patchState(store, { user: { email : 'rjwhitmercc@gmail.com' }} )
            router.navigate([""])
        },
        logout: () => {
            patchState(store, { user: undefined })
            router.navigate(["/login"])
        }
    }))
)