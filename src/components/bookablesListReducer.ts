import { State } from "./BookablesList"

export enum ActionKind {
    SET_GROUP,
    SET_BOOKABLE,
    TOGGLE_HASDETAILS,
    NEXT_BOOKABLE
}

export type Action = {
    type: ActionKind,
    payload?: any
}
export default function reducer(state: State, action: Action): State{
    
    switch (action.type){
        case ActionKind.SET_GROUP:
            console.log("set group")
            return {...state, group: action.payload, selectedBookable: 0}
        case ActionKind.NEXT_BOOKABLE:
            console.log("next")
            let index = state.selectedBookable
            let last = state.bookables.filter((b) => b.group === state.group).length - 1
            return {...state, selectedBookable: (index === last ? 0 : index + 1)}
        case ActionKind.SET_BOOKABLE:
            console.log("set bookable")
            return {...state, selectedBookable: action.payload}
        case ActionKind.TOGGLE_HASDETAILS:
            console.log("toggle details")
            return {...state, hasDetails: !state.hasDetails}
        default:
            return state
    }
}