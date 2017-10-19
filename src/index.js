import Button from './component/button/component.js'
console.log(Button)

let button = new Button({
    
    data: {
        name: 'hello world!'
    }
})

button.$inject('#wrapper')
