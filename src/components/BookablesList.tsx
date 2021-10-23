import { Fragment, useEffect, useState } from "react";
import { FaArrowRight, FaRegComments } from "react-icons/fa";
import { Bookable, getBookables } from "../helpers/apicalls"
import { bookables, sessions, days } from '../helpers/static-data.json'

const BookablesList = () => {

    const [selectedBookable, setSelectedRoom] = useState(0)
    let groups: string[] = bookables.map(value => value.group)
    const [group, setGroup] = useState(groups[0])
    const bookablesInGroup = bookables.filter(value => value.group === group)

    const [hasDetails, setDetails] = useState(false)
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
        setSelectedRoom(
            (selectedBookable === bookables.length - 1) ? 0 : selectedBookable + 1
        )
    }
    function changeBookable(index: number): void {
        setSelectedRoom(index)
    }
    function selectBook(index: number) {
        if (selectedBookable === index)
            return "active"
        else
            return ""
    }
    return (
        <Fragment>
            <div>
                <select name="" id="" onChange={(e) => setGroup(e.target.value)}>
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
                                    onChange={(has) => setDetails(!hasDetails)} />
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