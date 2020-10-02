
export const persisttestreducer = (state="ranjith",action)=>{
    switch(action.type) {
        // case "OPPOSITEDATA":
        //   return "checkpersist12345"
          case "OPPOSITEDATAFALSE":
          return "checkpersist"
        default:
          return state
      }
}