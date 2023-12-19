import { configureStore } from "@reduxjs/toolkit";
import place from "./place";

export default configureStore({
    reducer:{
        place:place,
    }
})