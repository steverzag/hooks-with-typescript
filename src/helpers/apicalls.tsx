//import {bookables} from './static-data.json'
export type Room = {
    id: number,
    group: string,
    title: string,
    notes: string,
    sessions: number[],
    days: number[]
}
export const getRooms = async(): Promise<Room[]> => {

    const endpoint = './static-data.json'
    const {bookables} = await (await fetch(endpoint, {
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        }
    })).json()
    
    console.log(bookables)
    return bookables.filter((room: Room) => room.group === "Rooms");
}