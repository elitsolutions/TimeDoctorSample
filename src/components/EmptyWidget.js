import React from 'react';
import styles from '../Styles'

class EmptyWidget extends React.Component {
    constructor(props) {
        super(props);

        this.dragOver = this.dragOver.bind(this);
        this.drop = this.drop.bind(this);
    }

    dragOver = (e) => {
        e.preventDefault()
    
        let empties = document.querySelectorAll('.widget')
        empties.forEach((node) => {
            if(node.classList.contains('widgetEmpty') && !node.classList.contains('dropHere'))
                node.classList.add('dropHere')
        })
    }
    
    drop = (e) => {
        e.preventDefault()
    
        let data 
        data = e.dataTransfer.getData('text')
        var parser = new DOMParser()
        var el = parser.parseFromString(data, "text/html");
    
        e.target.draggable = true
        e.target.classList.toggle('widgetEmpty')
        el.children[0].children[1].children[0].style.opacity = ''
        e.target.style=el.children[0].children[1].children[0].style.cssText
        e.target.innerHTML = el.children[0].children[1].children[0].innerHTML
    
        let empties = document.querySelectorAll('.widget')
        empties.forEach((node) => {
            node.classList.remove('dropHere')
        })
    }
    render() {
        return (
            <div 
            className={'widgetEmpty widget'}  
            onDragOver={this.dragOver}
            onDrop={this.drop}
            >
            </div>
        )
    }
}

export default EmptyWidget;