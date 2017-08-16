export default {
    header: {
        padding: '15px' 
    },
    headerTitle: {
        color: '#2c4159',
        float: 'left'
    },
    editAddButtons: {
        float: 'right'
    },
    btnEditLayout: {
        backgroundColor: '#fff',
        border: '1px solid #dadee6',
        color: '#5b6b7d',
        padding: '7px 12px',
        margin: '0 5px',
        borderRadius: '3px',
        fontSize: '12px',
        textDecoration: 'none'
    },
    btnAddWidget: {
        backgroundColor: '#657fa8',
        color: '#fff',
        padding: '7px 12px',
        margin: '0 5px',
        borderRadius: '3px',
        fontSize: '12px',
        textDecoration: 'none'
    },
    main: {
        marginTop: '40px',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    widgetEmpty: {
        color: '#adc1cc',
        border: '1px dashed #657fa8',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '31%',
        height: '300px',
        margin: '14px',
        float: 'left',
        borderRadius: '5px'
    },
    widgetNotEmpty: {
        width: '31%',
        height: '300px',
        margin: '14px',
        float: 'left',
        borderRadius: '5px',
        backgroundColor: 'white',
        boxShadow: '1px 1px 0px 1px rgba(240,240,240,1)',
        color: '#818d9c'
    },
    widgetNotEmptyHeader: {
        padding: '5px',
        borderBottom: '1px solid #d8dde6'
    },
    widgetNotEmptyHeaderTitle: {
        fontSize: '13px',
        color: '#33475e',
        float: 'left',
        padding: '9px'
    },
    widgetNotEmptyHeaderOptions: {
        float: 'right',
        fontSize: '12px',
        position: 'relative'
    },
    widgetNotEmptyHeaderDropdown: {
        float: 'left',
        display: 'flex',
        alignItems: 'center'
    },
    widgetNotEmptyHeaderSettings: {
        float: 'right',
    },
    widgetNotEmptyHeaderDropdownContent: {
        // display: 'none',
        position: 'absolute',
        backgroundColor: '#f9f9f9',
        minWidth: '160px',
        boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.2)',
        borderRadius: '3px',
        padding: '5px',
        left: '-70px',
        top: '8px',
        zIndex: '1'
    },
    widgetNotEmptyHeaderDropdownContentLink: {
        display: 'block',
        padding: '10px',
        textDecoration: 'none',
        color: '#657fa8'
    },
    widgetNotEmptyContent: {
        fontSize: '12px',
        color: '#3d5066',
        padding: '5px'
    },
    widgetNotEmptyContentTable: {
        width: '100%'
    },
    widgetNotEmptyContentTableTr: {
        padding: '10px'
    },
    widgetNotEmptyContentTableTd1: {
        width: '10%'
    },
    widgetNotEmptyContentTableTd2: {
        width: '40%'
    },
    widgetNotEmptyContentTableTd3: {
        width: '40%'
    },
    widgetNotEmptyContentTableTd4: {
        width: '10%',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    overlay: {
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        background: 'rgba(0, 0, 0, 0.3)',
        transition: 'opacity 500ms',
        visibility: 'visible',
        opacity: '1'
    },
    popup: {
        margin: '70px auto',
        background: '#f1f1f1',
        borderRadius: '5px',
        width: '70%',
        height: '70%',
        position: 'relative',
        transition: 'all 5s ease-in-out',
        overflow: 'hidden'
    },
    popupHeader: {
        borderBottom: '1px solid #ccc',
        padding: '15px 20px'
    },
    popupHeaderTitle: {
        fontWeight: 'bold',
        color: '#33475e'
    },
    popupClose: {
        position: 'absolute',
        top: '10px',
        right: '15px',
        transition: 'all 200ms',
        fontSize: '30px',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: '#333'
    },
    popupContent: {
        overflow: 'auto',
        margin: '0 auto'
    },
    popupContentLeftColumn: {
        width: '22%',
        height: '100%',
        float: 'left',
        position: 'absolute',
        background: '#f1f1f1',
        borderRight: '1px solid #ccc'
    },
    popupContentLeftColumnForm: {
        padding: '10px'
    },
    popupContentLeftColumnFormInput: {
        width: '90%',
        lineHeight: '20px',
        padding: '5px 10px',
        borderRadius: '5px',
        boxShadow: 'none',
        fontSize: '13px',
        border: '1px solid #ccc'
    },
    popupContentLeftColumnUl: {
        listStyle: 'none',
        margin: '0',
        padding: '0',
        fontSize: '13px'
    },
    popupContentLeftColumnLi: {
        lineHeight: '30px',
        marginTop: '2px'
    },
    popupContentLeftColumnLiA: {
        textDecoration: 'none',
        color: '#3d5066'
    },
    popupContentLeftColumnLiAImg: {
        float: 'left'
    },
    popupContentRightColumn: {
        width: '76%',
        backgroundColor: '#fff',
        float: 'right',
        padding: '10px',
        borderLeft: '1px solid #ccc'
    },
    popupContentRightColumnTr: {
        borderBottom: '1px solid #ccc'
    },
    popupContentRightColumnTd: {
        padding: '5px'
    },
    popupContentRightColumnTdH5: {
        margin: '0'
    },
    popupContentRightColumnTdSpan: {
        fontSize: '11px',
        color: '#ccc'
    },
    popupContentRightColumnTdP: {
        fontSize: '12px',
        margin: '5px 5px 5px 0'
    },
    popupContentRightColumnButtonAddWidget: {
        backgroundColor: '#657fa8',
        color: '#fff',
        padding: '7px 12px',
        margin: '0 5px',
        borderRadius: '3px',
        border: '0',
        fontSize: '12px',
        textDecoration: 'none',
        width: '100%'
    },
    progressBG: {
        height: '8px',
        backgroundColor: '#f1f1f1'
    }
}