import React from 'react';
import Button from './Button'
import AddWidgetButton from './AddWidgetButton'
import styles from '../Styles'

const PopupWidgets = () => {
    let widgets = [];
    let widgetCount = 3;

    for (let i = 0; i < widgetCount; i++) {
        widgets.push(
            <tr style={styles.popupContentRightColumnTr} className={'popupContentRightColumnTr'} key={i}>
                <td style={styles.popupContentRightColumnTd} className={'popupContentRightColumnTd'}>
                    <img src="./resources/users-activity-widget-picture.png" />
                </td>
                <td style={styles.popupContentRightColumnTd} className={'popupContentRightColumnTd'}>
                    <h5 style={styles.popupContentRightColumnTdH5}>
                        Users Activity
                    </h5>
                    <span style={styles.popupContentRightColumnTdSpan}>
                        By TimeDoctor
                    </span>
                    <p style={styles.popupContentRightColumnTdP}>
                        Users who worked more or less than their minimum hours required in daily, weekly and monthly.
                    </p>
                </td>
                <td style={styles.popupContentRightColumnTd} className={'popupContentRightColumnTd'}>
                    <AddWidgetButton 
                        href={'javascript:;'} 
                        style={styles.popupContentRightColumnButtonAddWidget} 
                        className={'popupContentRightColumnButtonAddWidget'} 
                        text={'Add Widget'} 
                    />
                </td>
            </tr>
        );
    }
        
    return(
        <table>
            <tbody>
                {widgets}
            </tbody>
        </table>
    )
}

export default PopupWidgets;