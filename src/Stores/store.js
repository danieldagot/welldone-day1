import { observable, computed, action, runInAction ,decorate} from "mobx";
import axios from "axios";
import { createContext } from 'react'
export class faveStore {
@observable Locations = JSON.parse(localStorage.getItem("Locations")) || {}
@observable Categories = JSON.parse(localStorage.getItem("Categories")) || []
@action addCategory = (name) =>{
 this.Categories.push(name)
 localStorage.setItem("Categories", JSON.stringify(this.Categories))
}
@action addCategory = (categoryName) =>{
    this.Categories.push(categoryName)
    console.log(this.Categories);
    localStorage.setItem("Categories", JSON.stringify(this.Categories))
   }
 @action removeCategory = (index) => {
     console.log(index);
     
    if(this.Categories.langth == 1 )
    {
    this.Categories = []
    }
    else{
        console.log(this.Categories);
        this.Categories.splice(index,1)


    }

     localStorage.setItem("Categories", JSON.stringify(this.Categories))
    
 }
 @action editCategory = (index,valeu) => {
    this.Categories[index] = valeu
    localStorage.setItem("Categories", JSON.stringify(this.Categories))
}
}

export default createContext(new faveStore())