//import {bookables} from './static-data.json'
export type Bookable = {
    id: number,
    group: string,
    title: string,
    notes: string,
    sessions: number[],
    days: number[]
}
export const getBookables = async(): Promise<Bookable[]> => {

    const endpoint = './static-data.json'
    const {bookables} = await (await fetch(endpoint, {
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        }
    })).json()

    console.log(bookables)
    return bookables;
}