import React from 'react';
import { connect } from 'react-redux';
import { addWidget } from '../actions/index';
import styles from '../Styles';

class AddWidgetButton extends React.Component {
    render() {
        return (
            <a 
                style={this.props.style} 
                className={this.props.className} 
                href={this.props.href} 
                onClick={this.props.addWidget}
            >
                {this.props.text}
            </a>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addWidget: () => dispatch(addWidget()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddWidgetButton);