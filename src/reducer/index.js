

const count = (state = 0, action) => {
    switch (action.type) {
      case 'ADD':
        return state + 1
      
      default:
        return state
    }
  }
  
  export default count