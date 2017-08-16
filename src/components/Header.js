import React from 'react';
import Button from './Button'
import styles from '../Styles'

export default class Header extends React.Component {
    render() {
        return (
            <header style={styles.header}>
                <div style={styles.headerTitle}>
                    Team Dashboard
                </div>
                <div style={styles.editAddButtons}>
                    <Button 
                        href={'javascript:;'} 
                        style={styles.btnEditLayout} 
                        className={'editLayout'} 
                        text={'Edit Layout'} 
                    />
                    <Button 
                        href={'javascript:;'} 
                        style={styles.btnAddWidget} 
                        className={'addWidget'} 
                        text={'Add Widget'} 
                    />
                </div>
            </header>
        );
    }
}