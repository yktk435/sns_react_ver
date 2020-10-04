import React from 'react'

const RightArea = (props) => { 
    return (
        <div className="main right border" style={{ overflow: "auto" }}>
                {/* <!-- 検索バー --> */}
                <div className='search-bar-parent' style={{backgroundColor:"rgb(32, 45, 46)",margin:"15px", borderRadius: "30px",height:" 50px",width:" 500px",display:"flex",justifyContent: "center",alignItems: "center",width:"90%",}}>
                    <div style={{width: "80%"}}>
                        {/* <!-- 検索アイコン --> */}
                        <div style={{float:"left",display:"flex", justifyContent:"center", alignItems:"center", height:"40px",}}>
                            <img src="image/serch.png" className="search-icon" alt="検索アイコン" style={{width: "20px",padding: "0 10px"}}/>
                        </div>
                        <div style={{padding: "0 0px"}}>
                            <input placeholder="キーワード検索" type="text" className="search-bar" aria-label="検索バー" onBlur="focusOut(this)" onFocus="focus()"/>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default RightArea