import React from 'react'
import { Signup } from './signup/signup';

export const FacebookLoginContainer = () =>{
    return(
        <main>
        <div className="row">
            <div className="col-logo">
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Logo"/>
                <h2>Facebook helps you connect and share with the people in your life.</h2>
            </div>
            <Signup />
        </div>
    </main>

    )
}