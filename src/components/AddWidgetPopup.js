import React from 'react';
import styles from '../Styles'

const AddWidgetPopup = () => {
        return(
            <div id='addWidget' style={styles.overlay}>
                <div style={styles.popup}>
                    <div style={styles.popupHeader}>
                        <div style={styles.popupHeaderTitle}>
                            Add a widget
                        </div>
                        <a class="close" href="#">
                            <img src="./resources/close-icon-default.svg" srcset="./resources/close-icon-default.svg" />
                        </a>
                    </div>
                </div>
            </div>
        )
}

export default AddWidgetPopup;