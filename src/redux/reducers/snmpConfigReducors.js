import * as actionTypes from '../actions/types';

const snmpConfig = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.SET_SNMP_CONFIG:
            return {...action.data}
        case actionTypes.REMOVE_SNMP_CONFIG:
            return {}
        case actionTypes.UPDATE_SNMP_CONFIG:
            return {...action.data}//{...state,links:action.data}
        default:
            return state;
    }
}

export default snmpConfig;