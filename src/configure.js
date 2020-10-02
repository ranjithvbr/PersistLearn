import {allreducer,persistreducer} from "./reducer";
import { createStore,applyMiddleware ,compose} from "redux";
import  { persistStore } from "redux-persist";
import logger from "redux-logger";



const middlewares = [logger]

 export const store = createStore(
     persistreducer,
//   allreducer,
  compose(
        applyMiddleware(...middlewares),
          window.devToolsExtension && window.devToolsExtension()
    )
//   applyMiddleware(...middlewares),
//   window.devToolsExtension && window.devToolsExtension()
  )

  export const persistor = persistStore(store)

  export default{store,persistor}

// console.log(store.getState(),"store")