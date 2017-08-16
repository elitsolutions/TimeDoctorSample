import React from 'react';
import { connect } from 'react-redux';
import { } from '../actions/index';
import Widget from './Widget'
import EmptyWidget from './EmptyWidget'
import styles from '../Styles'

class Main extends React.Component {
    render() {
        let widgetCountPerPage = Array.from(Array(6));

        return (
            <main style={styles.main}>
                {widgetCountPerPage.map((arr, i) =>
                    {
                        return (i == 0 && this.props.isAdded)?
                            <Widget style={styles.widgetEmpty} key={i} /> :
                            <EmptyWidget key={i} />
                    }
                )}
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAdded: state.widgetIsAdded,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);