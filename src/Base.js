import React, { Component} from "react";
import ReactDOM from "react-dom";
import LeftArea from './leftarea'
import CenterArea from './centerarea'
import RightArea from './rightarea'

class Base extends Component{
    constructor(props) {
        super(props)
        this.state = {
            menuName: "通知",
            menu: "home"
        }
    }
    render(){
        return (
            <React.Fragment>
                {/* アイコン系(左側) */}
                <LeftArea />
                {/* タイムライン系(真ん中と左のエイア) */}
                <Main {...this.state}/>
            </React.Fragment>
        );
    };
}


const Main = (props) => {
    console.log(props)
    return (
        <main>
            {/* 真ん中のエリア */}
            <CenterArea info={props} />
            {/* 左のエリア(その他情報) */}
            <RightArea />
        </main>
    )
}


export default Base;
