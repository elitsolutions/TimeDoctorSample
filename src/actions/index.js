export function widgetDataHasErrored(bool) {
    return {
        type: 'DATA_HAS_ERRORED',
        hasErrored: bool
    };
}

export function widgetDataIsLoading(bool) {
    return {
        type: 'DATA_IS_LOADING',
        isLoading: bool
    };
}

export function widgetDataFetchSuccess(jsonData) {
    return {
        type: 'DATA_FETCH_SUCCESS',
        jsonData
    };
}

export function widgetIsAdded(bool) {
    return {
        type: 'WIDGET_IS_ADDED',
        isAdded: bool
    };
}

export function widgetDataOrderIsIncrease(bool) {
    return {
        type: 'WIDGET_DATA_ORDER_INCREASE',
        isIncrease: bool
    }
}

export function popupWidgetIsOpen(bool) {
    return {
        type: 'POPUP_IS_OPEN',
        isOpen: bool
    };
}

export function openPopupWidget() {
    return (dispatch) => {
        dispatch(popupWidgetIsOpen(true));
    };
}

export function closePopupWidget() {
    return (dispatch) => {
        dispatch(popupWidgetIsOpen(false));
    };
}

export function addWidget() {
    return (dispatch) => {
        dispatch(popupWidgetIsOpen(false));

        dispatch(widgetIsAdded(true));

        dispatch(widgetDataFetch('https://gist.githubusercontent.com/nunomluz/d01defb4b5cae3d40658d465e15640e2/raw/738bf5c86b9976d266871147992d4ed9bb4b6d14/data.json'));
    };
}

export function deleteWidget() {
    return (dispatch) => {
        dispatch(widgetIsAdded(false));
    }
}

export function widgetDataFetch(url) {
    return (dispatch) => {
        dispatch(widgetDataIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(widgetDataIsLoading(false));
                

                return response;
            })
            .then((response) => response.json())
            .then((jsonData) => {
                dispatch(widgetDataFetchSuccess(jsonData));
            })
            .catch(() => {
                dispatch(widgetDataHasErrored(true))
            });
    };
}