import * as actionTypes from './types';

export const setContent = data => ({
    type: actionTypes.SET_CONTENT,
    data
});

export const removeContent = () => ({
    type: actionTypes.REMOVE_CONTENT,
})

export const updateContent = data => ({
    type: actionTypes.UPDATE_CONTENT,
    data
});