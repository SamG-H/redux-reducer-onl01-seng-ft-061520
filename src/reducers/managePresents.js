export function managePresents(state, action){
    switch(action.type) {
      case "INCREASE":
        return { numberOfPresents: state + 1}
      default:
        return { numberOfPresents: 0}
    }
}
