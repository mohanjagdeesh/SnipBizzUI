import Header from "../Header";

import "./index.css"


const TermsConditions = () => {
    const introduction = () => (
        <div></div>
    )

    return(
    <div>
        <Header/>
        <div className="tc-head-cont">
            <h1>Terms and Conditions</h1>
        </div>
        <div>
            {introduction()}
        </div>
    </div>
    )
}


export default TermsConditions