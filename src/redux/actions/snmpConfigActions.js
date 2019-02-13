import * as actionTypes from './types';

export const setSnmpConfig = data => ({
    type: actionTypes.SET_SNMP_CONFIG,
    data
});

export const removeSnmpConfig = () => ({
    type: actionTypes.REMOVE_SNMP_CONFIG,
})

export const updateSnmpConfig = data => ({
    type: actionTypes.UPDATE_SNMP_CONFIG,
    data
});