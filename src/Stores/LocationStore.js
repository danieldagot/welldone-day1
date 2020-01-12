import {
    observable,
    computed,
    action,
    runInAction,
    decorate
} from "mobx";
import axios from "axios";
import {
    createContext
} from 'react'
export class LocationStore {
    @observable Locations = JSON.parse(localStorage.getItem("Locations")) || []

    @action addLocation = (location) => {
        this.Locations.push(location)
        console.log(this.Locations);
        localStorage.setItem("Locations", JSON.stringify(this.Locations))
    }
    @action removeLocation = (index) => {
        console.log(index);

        if (this.Locations.langth == 1) {
            this.Locations = []
        } else {
            console.log(this.Locations);
            this.Locations.splice(index, 1)
        }

        localStorage.setItem("Locations", JSON.stringify(this.Locations))

    }
    @action editLocation = (index, location) => {
        this.Locations[index] = location
        localStorage.setItem("Locations", JSON.stringify(this.Locations))
    }
}

export default createContext(new LocationStore())