import {getGifs} from "../helpers/GetGifs";

export const GifGrid = ({category}) => {
    getGifs(category)
    return (
        <>
            <h3>{category}</h3>
        </>
    )
}