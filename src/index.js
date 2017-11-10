import Button from "./component/Button/ui.js"
import { createStore } from "redux"
import reducer from "./reducer"
console.log(Button)
const store = createStore(reducer)

console.log("state", store.getState())

let button = new Button({
  data: {
    name: "hello world!"
  }
})

button.$inject("#wrapper")



