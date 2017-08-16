import { combineReducers } from 'redux';

export function popupWidgetIsOpen(state = false, action) {
    switch (action.type) {
        case 'POPUP_IS_OPEN':
            return action.isOpen;

        default:
            return state;
    }
}

export function widgetDataHasErrored(state = false, action) {
    switch (action.type) {
        case 'DATA_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function widgetDataIsLoading(state = false, action) {
    switch (action.type) {
        case 'DATA_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function widgetIsAdded(state = false, action) {
    switch (action.type) {
        case 'WIDGET_IS_ADDED':
            return action.isAdded;

        default:
            return state;
    }
}

export function widget(state = [], action) {
    switch (action.type) {
        case 'DATA_FETCH_SUCCESS':
            return action.jsonData;

        default:
            return state;
    }
}

export default combineReducers({
    widget,
    widgetDataHasErrored,
    widgetDataIsLoading,
    popupWidgetIsOpen,
    widgetIsAdded,
});