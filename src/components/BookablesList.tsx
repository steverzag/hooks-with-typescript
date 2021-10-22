import { useEffect, useState } from "react";
import { FaArrowRight, FaRegComments } from "react-icons/fa";
import { Room, getRooms } from "../helpers/apicalls"

const BookablesList = () => {

    const [rooms, setRooms] = useState([] as Room[]);
    const [selectedRoom, setSelectedRoom] = useState(0);
    
    useEffect(() => {
        async function call () {
            setRooms(await getRooms())
        }
        call()
    }, [])
    function handleNext(): void{
        setSelectedRoom(
            (selectedRoom === rooms.length -1 )? 0 : selectedRoom + 1
        )
    }
    function changeBookable(index: number): void {
        setSelectedRoom(index)
    }
    function selectBook(index: number) {
        if(selectedRoom === index)
            return "active"
        else 
            return ""
    }
    return (
        <ul className="my-3">
            {rooms.map((room, index) => (
                <li key={index} className={selectBook(index)}>
                    <button className="btn btn-outline-primary" 
                            onClick={() => changeBookable(index)}
                           >
                        {room.title}
                    </button>
                </li>
            ))}
            <p>
                <button className="btn btn-info" onClick={handleNext} autoFocus>
                    <FaArrowRight/>
                    <span>Next</span>
                    </button>
            </p>
        </ul>
    )
}

export default BookablesList