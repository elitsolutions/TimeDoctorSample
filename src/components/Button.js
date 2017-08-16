import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { openPopupWidget, closePopupWidget } from '../actions/index';

import PopupWidgets from './PopupWidgets';
import styles from '../Styles';

class Button extends React.Component {

    render() {
        return (
            <span>
                <a 
                    style={this.props.style} 
                    className={this.props.className} 
                    href={this.props.href} 
                    onClick={this.props.openPopupWidget}
                >
                    {this.props.text}
                </a>
                {this.props.isOpen?
                    <div id={this.props.className} style={styles.overlay}>
                        <div style={styles.popup}>
                            <div style={styles.popupHeader}>
                                <div style={styles.popupHeaderTitle}>
                                    Add a widget
                                </div>
                                <a style={styles.popupClose} onClick={this.props.closePopupWidget} className="popupClose" href={'javascript:;'}>
                                    <img src="./resources/close-icon-default.svg" srcSet="./resources/close-icon-default.svg" />
                                </a>
                            </div>
                            <div style={styles.popupContent}>
                                <div style={styles.popupContentLeftColumn}>
                                    <form style={styles.popupContentLeftColumnForm}>
                                        <input style={styles.popupContentLeftColumnFormInput} name="search" placeholder="Search" />
                                    </form>
                                    <ul style={styles.popupContentLeftColumnUl}>
                                        <li style={styles.popupContentLeftColumnLi} className='popupContentLeftColumnLi'>
                                            <a href="" style={styles.popupContentLeftColumnLiA}>
                                                <img style={styles.popupContentLeftColumnLiAImg} src="./resources/widgetdirectory-icon-default.svg" srcSet="./resources/widgetdirectory-icon-default.svg" /> Widget Directory
                                            </a>
                                        </li>
                                        <li style={styles.popupContentLeftColumnLi} className='popupContentLeftColumnLi'>
                                            <a href="" style={styles.popupContentLeftColumnLiA}>
                                                <img style={styles.popupContentLeftColumnLiAImg} src="./resources/mywidget-icon-default.svg" srcSet="./resources/mywidget-icon-default.svg" /> Widget Directory
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div style={styles.popupContentRightColumn}>
                                    <PopupWidgets 
                                        count={3} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                :
                ''}
            </span>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isOpen: state.popupWidgetIsOpen
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        openPopupWidget: () => dispatch(openPopupWidget()),
        closePopupWidget: () => dispatch(closePopupWidget()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);