import {inputreducer} from "./inputreducer.js";
import {persisttestreducer} from "./persisttestreducer.js";
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['inputvalue'] // only navigation will be persisted
};


 export const allreducer = combineReducers({
    inputvalue:inputreducer,
    persisttest:persisttestreducer
})

export const persistreducer = persistReducer(persistConfig,allreducer)