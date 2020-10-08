import React, { Component} from "react";
import ReactDOM from "react-dom";
import LeftArea from './leftarea'
import CenterArea from './centerarea'
import RightArea from './rightarea'
import Login from './login'

class Base extends Component{
    constructor(props) {
        super(props)
        this.state = {
            menuName: "通知",
            menu: "login"
        }
        this.comp=(
            <React.Fragment>
                {/* アイコン系(左側) */}
                <LeftArea />
                {/* タイムライン系(真ん中と左のエイア) */}
                <Main {...this.state}/>
            </React.Fragment>
        )
        
        if (this.state.menu == "login") {
            this.comp = (<Login />)
            console.log(this.comp)
        }

    }
    render(){
        return this.comp
    };
}


const Main = (props) => {
    console.log(props)
    return (
        <main>
            {/* 真ん中のエリア */}
            <CenterArea info={props} />
            {/* 左のエリア(その他情報) */}
            <RightArea info={props}/>
        </main>
    )
}


export default Base;
