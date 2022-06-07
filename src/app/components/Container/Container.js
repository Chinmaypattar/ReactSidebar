import React from "react";
import Footer from "../Footer/Footer";
import Navigator from "../Navigator/Navigator";
import "./Container.scss";

const Container = (props) => {
    return (
        <>
            <div
                className="page-wrapper"
            >
                {
                window.location.pathname !== '/login' && window.location.pathname!=='/register'? 
                <div>
                    <Navigator {...props} />
                    <div className="container-wrapper">{props.children}</div>
                </div> : 
                <div className="entry-container-wrapper">{props.children}</div>
                }

            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Container;
