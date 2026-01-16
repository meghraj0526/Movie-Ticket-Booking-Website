import mongoose from "mongoose";
import movie from "./movie";

const showSchema = new mongoose.Schema(
    {
        movie: {type: String, required: true, ref: 'movie'},
        showDataTime: {type: Date, requried: true},
        showPrice: {type: Date, requried: true},
        occupiedSeats: {type: Object, default:{} },
    }, {minimize: false}
)

const show = mongoose.model("show", showSchema);

export default show;