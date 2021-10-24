import { Fragment, useEffect, useReducer, useState } from "react";
import { FaArrowRight, FaRegComments } from "react-icons/fa";
import { Bookable, getBookables } from "../helpers/apicalls"
import { bookables, sessions, days } from '../helpers/static-data.json'
import reducer, { ActionKind } from "./bookablesListReducer";

export type State = {
    group: string,
    selectedBookable: number,
    hasDetails: boolean,
    bookables: Bookable[]
}

const initialState: State = {
    group: bookables[0].group,
    selectedBookable: 0,
    hasDetails: false,
    bookables: bookables
}

const BookablesList = () => {

    //const [hasDetails, setDetails] = useState(false)
    //const [selectedBookable, setSelectedBookable] = useState(0)
    //const [group, setGroup] = useState(groups[0])

    const [state, dispatch] = useReducer(reducer, initialState)
    const {group, selectedBookable, hasDetails, bookables} = state
    const bookablesInGroup = bookables.filter(value => value.group === group)
    let groups: string[] = bookables.map(value => value.group)
    const bookable = bookablesInGroup[selectedBookable]

    console.log(selectedBookable)
    groups = groups.reduce((ack, value) => {

        let contains: boolean = false
        ack.forEach(val => {

            if (val === value)
                contains = true
        })
        if (contains)
            return [...ack]
        return [...ack, value]

    }, [] as string[])
    console.log(groups)
    function handleNext() {
        dispatch({type: ActionKind.NEXT_BOOKABLE})
        //setSelectedBookable(
        //    (selectedBookable === bookables.length - 1) ? 0 : selectedBookable + 1
        //)
    }
    function changeBookable(index: number): void {
        dispatch({type: ActionKind.SET_BOOKABLE, payload: index})
        //setSelectedBookable(index)
    }
    function selectBook(index: number) {
        if (selectedBookable === index)
            return "active"
        else
            return ""
    }
    function handleChangeBookablesSelect(e: React.ChangeEvent<HTMLSelectElement>) {
        dispatch({type: ActionKind.SET_GROUP, payload: e.target.value})
        //setSelectedBookable(0)
        //setGroup(e.target.value)
    }
    return (
        <Fragment>
            <div>
                <select name="" id="" onChange={handleChangeBookablesSelect}>
                    {groups.map((group, index) => (
                        <option key={index} value={group}>{group}</option>
                    ))}
                </select>
                <ul className="my-3">

                    {console.log('books' + bookables.length)}
                    {bookablesInGroup.map((item, index) => (
                        <li key={index} className={selectBook(index)}>
                            <button className="btn btn-outline-primary"
                                onClick={() => changeBookable(index)}>
                                {item.title}
                            </button>
                        </li>
                    ))}
                    <p>
                        <button className="btn btn-info" onClick={handleNext} autoFocus>
                            <FaArrowRight />
                            <span>Next</span>
                        </button>
                    </p>
                </ul>
            </div>
            <div>
                {bookable && (
                    <div>
                        <div>
                            <h2>{bookable.title}</h2>
                            <span>
                                <label htmlFor="check-datails">Show details</label>
                                <input type="checkbox" name="check-details" id="checkDetails"
                                    onChange={(has) => dispatch({type: ActionKind.TOGGLE_HASDETAILS})} />
                            </span>
                        </div>
                        <p>{bookable.notes}</p>
                        {(hasDetails) &&
                            <div>
                                <h3>Availability</h3>
                                <ul>
                                    {bookable.days.sort().map((value, index) => (
                                        <li key={index}>
                                            <p>{days[value]}</p>
                                        </li>
                                    ))}
                                </ul>
                                <ul>
                                    {bookable.sessions.map((value, index) => (
                                        <li key={index}>{sessions[value]}</li>
                                    ))}
                                </ul>
                            </div>}
                    </div>

                )}
            </div>
        </Fragment>
    )
}

export default BookablesList