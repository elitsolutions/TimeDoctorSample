import React from 'react';
import { connect } from 'react-redux';
import { deleteWidget } from '../actions/index';
import styles from '../Styles'

class Widget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            order: 'desc',
            numOfUsers: 5,
            isDropdownOpen: false,
            isEditSettingsOpen: false,
            isEditSettingsOpenClassName: '',
            jsonData: this.props.jsonData,
        }

        this.handleClick = this.handleClick.bind(this);
        this.deleteWidget = this.deleteWidget.bind(this);
        this.editWidget = this.editWidget.bind(this);
        this.cancelEditWidget = this.cancelEditWidget.bind(this);
        this.setNumOfUsers = this.setNumOfUsers.bind(this);
        this.dragStart = this.dragStart.bind(this);
        this.dragEnd = this.dragEnd.bind(this);
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            jsonData: nextProps.jsonData
        })
    }

    processData = (data) => {
        let users = data.users;
        let sorted = ''

        users.map((obj, i)=>(
            obj.percentage = data.weekly[obj.id]
        ));
        
        if(this.state.order == 'asc')
        {
            sorted = users.sort(function(a,b){return parseFloat(a.percentage)-parseFloat(b.percentage)})
        }
        else
        {
            sorted = users.sort(function(a,b){return parseFloat(b.percentage)-parseFloat(a.percentage)})
        }

        let newData = sorted.slice(0, this.state.numOfUsers);

        return newData;
    }

    handleClick = () => {
        this.setState({
            isDropdownOpen: !this.state.isDropdownOpen
        })
    }

    deleteWidget = () => {
        this.setState({
            jsonData: '',
            order: 'desc',
            numOfUsers: 5,
        })

        this.props.deleteWidget();

        this.handleClick();
    }

    editWidget = () => {
        this.setState({
            isEditSettingsOpen: true,
            isEditSettingsOpenClassName: 'widgetNotEmptyEditable'
        })

        this.handleClick();
    }

    cancelEditWidget = () => {
        this.setState({
            isEditSettingsOpen: false,
            isEditSettingsOpenClassName: ''
        })
    }

    setActivity = (e) => {
        let order = e.target.value
        this.setState({
            order
        },() => {
            this.processData(this.state.jsonData)
        })
    }

    setNumOfUsers = (e) => {
        let numOfUsers = e.target.value
        this.setState({
            numOfUsers,
        },() => {
            this.processData(this.state.jsonData)
        })
    }

    dragStart = (e) => {
        let perData = e.target
        this.dragged = e.currentTarget;
        e.target.style.opacity = .5;

        e.dataTransfer.setData('text', this.dragged.outerHTML);
    }

    dragEnd = (e) => {
        this.setState({
            dragEnd: true
        })
        e.target.innerHTML = ''
        e.target.style = ''
        e.target.draggable = false
        if(e.target.classList.contains('widget'))
            e.target.classList.add('widgetEmpty')
    }

    render() {
        let jsonData = this.state.jsonData
        let rowData = [];

        if(Object.keys(jsonData).length !== 0)
        {
            let newData = this.processData(jsonData)

            rowData = newData.map((id, i) => 
                <tr key={i} style={styles.widgetNotEmptyContentTableTr} className={'widgetNotEmptyContentTableTr'}>
                    <td style={styles.widgetNotEmptyContentTableTd1}>
                        <img src={'./resources/user-avatar-'+(i+1)+'.png'} />
                    </td>
                    <td style={styles.widgetNotEmptyContentTableTd2}>
                        {id.name} {id.lastname}
                    </td>
                    <td style={styles.widgetNotEmptyContentTableTd3}>
                        <div style={styles.progressBG}>
                            <div style={{height: '8px',width: id.percentage+'%',backgroundColor: 'green'}} />
                        </div>
                    </td>
                    <td style={styles.widgetNotEmptyContentTableTd4}>
                        {Math.round(id.percentage)}%
                    </td>
                </tr>
            );
        }

            return(
                <div 
                    style={styles.widgetNotEmpty} 
                    draggable={true} 
                    onDragStart={this.dragStart}
                    onDragEnd={this.dragEnd}
                    className={this.state.isEditSettingsOpenClassName+' widget'}
                >
                    <div style={styles.widgetNotEmptyHeader} className={'group'}>
                        <div style={styles.widgetNotEmptyHeaderTitle}>
                            Users Activity {this.props.isOpenSettings}
                        </div>
                        {this.state.isEditSettingsOpen?
                            ''
                            :
                            <div style={styles.widgetNotEmptyHeaderOptions}>
                                <div style={styles.widgetNotEmptyHeaderDropdown}>
                                    Weekly <img src="./resources/arrowdown-icon-default.svg" srcSet="./resources/arrowdown-icon-default.svg" />
                                </div>
                                <a style={styles.widgetNotEmptyHeaderSettings} href="javascript:;" onClick={this.handleClick}>
                                    <img src="./resources/settings-icon-default.svg" srcSet="./resources/settings-icon-default.svg" />
                                </a>
                                {this.state.isDropdownOpen?
                                    <div id="myDropdown" style={styles.widgetNotEmptyHeaderDropdownContent}>
                                        <a href="javascript:;" 
                                            onClick={this.editWidget}
                                            style={styles.widgetNotEmptyHeaderDropdownContentLink}
                                            className={'widgetNotEmptyHeaderDropdownContentLink'}>
                                            Edit Widget
                                        </a>
                                        <a href="javascript:;" 
                                            onClick={this.deleteWidget}
                                            style={styles.widgetNotEmptyHeaderDropdownContentLink}
                                            className={'widgetNotEmptyHeaderDropdownContentLink'}>
                                            Delete Widget
                                        </a>
                                    </div>
                                :
                                ''
                                }
                            </div>
                        }
                    </div>
                    <div style={styles.widgetNotEmptyContent}>
                        {this.state.isEditSettingsOpen?
                            <div style={{fontSize: '13px', padding: '5px'}}>
                                <div>
                                    Number of Users
                                </div>
                                <select 
                                    onChange={this.setNumOfUsers}
                                    defaultValue={this.state.numOfUsers} 
                                    style={{height: 30, width: '60%', marginTop: 10, padding: 10}}
                                >
                                    {Array(5).fill().map((_,i)=> 
                                        <option value={i+1} key={i+1}>{i+1}</option>
                                    )}
                                </select>
                                <div style={{marginTop: 10, marginBottom: 10}}>
                                    Activity
                                </div>
                                <div style={{float: 'left', display:'inline-block',marginBottom: 10}}>
                                    <div style={{width: '50%', display:'inline'}} onChange={this.setActivity.bind(this)} >
                                        <input 
                                            defaultChecked={this.state.order === 'desc'}
                                            name={'activity'}
                                            type={'radio'} 
                                            value={'desc'} 
                                            style={{marginRight: 10}}
                                        /> 
                                            Highest
                                        <input 
                                            defaultChecked={this.state.order === 'asc'}
                                            name={'activity'} 
                                            type={'radio'} 
                                            value={'asc'} 
                                            style={{marginLeft: 40, marginRight: 10}}
                                        /> 
                                            Lowest
                                    </div>
                                </div>
                                <div style={{clear: 'both'}}>
                                    Time
                                </div>
                                <select style={{height: 30, width: '60%', marginTop: 10, padding: 10}}>
                                    <option value={''}>Mobile Time</option>
                                </select>
                                <div style={{marginTop: 10}}>
                                    Date
                                </div>
                                <select style={{height: 30, width: '60%', marginTop: 10, padding: 10}}>
                                    <option value={''}>Weekly</option>
                                </select>
                                <div style={{margin: '15px 0', height: 20}}>
                                    <a href={'javascript:;'} onClick={this.cancelEditWidget} className={'saveButton'}>
                                    </a>
                                    <a href={'javascript:;'} onClick={this.cancelEditWidget} className={'cancelButton'}>
                                    </a>
                                </div>
                            </div>
                            :
                            <table style={styles.widgetNotEmptyContentTable}>
                                <tbody>
                                    {rowData}
                                </tbody>
                            </table> 
                        }
                    </div>
                </div>
            )

    }
}

const mapStateToProps = (state) => {
    return {
        jsonData: state.widget,
        isAdded: state.widgetIsAdded,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteWidget: () => dispatch(deleteWidget()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Widget);