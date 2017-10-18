import Button from './component/button'
console.log(Button)

let button = new Button({
    data: {
        name: 'hello world!'
    }
})

button.$inject('#wrapper')
