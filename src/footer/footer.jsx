import React from "react";

function Footer() {
    return (
        <div>
            <wired-divider></wired-divider>
            <p style={{ fontSize: "10px", padding: "5px 0" }}>© 2021 Junian | Power by {
                /Mac OS X/g.test(navigator.userAgent) ? <a href="https://bit.ly/3nV7uVM">https://bit.ly/3nV7uVM</a> : <wired-link href="https://bit.ly/3nV7uVM">https://bit.ly/3nV7uVM</wired-link>
            }
            </p>
        </div >
    );
}


export default Footer;
