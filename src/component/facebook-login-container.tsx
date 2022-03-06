import React from 'react'
import { Signup } from './signup/signup';

export const FacebookLoginContainer = () =>{
    return(
        <main className="page-container user-page">
            
                <div className="container">
                    <div className="new-section">
                        <div className="col-logo">
                            <div className="fb-logo">
                                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Logo"/>
                                </div>
                            <h2>Facebook helps you connect and share with the people in your life.</h2>
                        </div>
                        <Signup />
                    </div>
            </div>
    </main>
    
    )
}