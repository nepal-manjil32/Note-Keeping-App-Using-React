import React from "react"

function Footer()
{
    const year =  new Date().getUTCFullYear();
    return (
        <footer>
            <p>Manjil Nepal ⓒ {year}</p>
        </footer>
    );
}

export default Footer;