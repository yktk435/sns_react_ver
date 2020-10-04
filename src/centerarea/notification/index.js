import React, { Component } from 'react'
import ReplyNotification from './rep'

class Notification extends Component {
    constructor(props) {
        super(props);
        this.comp = <ReplyNotification />
        this.style = {
            all: {
                WebkitFilter: " invert(91%) sepia(99%) saturate(10000%) hue-rotate(203deg) brightness(169%) contrast(135%)",
                padding: "15px 0",
                float: "left",
                width: "calc(100%/2)",
                fontWeight: "bold",
                borderBottom: "3px solid rgb(48, 60, 67)"
            },
            rep: {
                padding: "15px 0",
                float: "left",
                width: "calc(100%/2)",
                fontWeight: "bold",
                borderBottom: "3px solid rgb(48, 60, 67)"
            },
        }
        console.log(this)
        console.log(props)
        // this.menu = this.replyNotificationMenu()
        if (props.state != 'all') this.comp = <AllNotification />
        this.clickReplyButton = this.clickReplyButton.bind(this)

    }
    clickAllButton() {
        console.log('all')
    }
    clickReplyButton() {
        console.log('rep')
    }
    render() {
        return (
            <div className="main-container" style={{ overflow: "auto" }}>
                <React.Fragment>
                    <div style={{ width: "100%", display: "inline-flex" }}>
                        <div className="notification-button-all" style={this.style.all} align="center" onClick={this.clickAllButton}>
                            すべて
                            </div>
                        <div className="notification-button-rep" style={this.style.rep} align="center" onClick={this.clickReplyButton}>
                            返信
                            </div>
                    </div>
                    {this.comp}
                </React.Fragment>
            </div >
        )
    }
}



export default Notification