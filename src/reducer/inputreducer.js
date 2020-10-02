
export const inputreducer = (state="testran",action)=>{
    switch(action.type) {
        case "INPUTDATA":
          return action.payload
          case "INPUTDATAs":
          return "RanjithRamya"
        default:
          return state
      }
}