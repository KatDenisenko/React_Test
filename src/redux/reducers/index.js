import {combineReducers} from 'redux';
import content from './contentReducer';
import snmpConfig from './snmpConfigReducors'; 

const rootReducer = combineReducers({
    content:content,
    snmpConfig:snmpConfig,
})

export default rootReducer;