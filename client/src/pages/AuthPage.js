import React from 'react'

export const AuthPage = () => {
    return (
        <div className="row">
           <div className="col s6 offset-s3">
                <h1>Сократи ссылку</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span class="card-title">Authorization</span>
                        <div>

                            <div class="input-field">
                                <input 
                                    placeholder="" 
                                    id="email" 
                                    type="text"
                                    name="email"
                                    className="yellow-input"
                                />
                                <label for="email">Email</label>
                            </div>

                            <div class="input-field">
                                <input 
                                    placeholder="" 
                                    id="password" 
                                    type="password"
                                    name="password"
                                    className="yellow-input"
                                />
                                <label for="password">Password</label>
                            </div>

                        </div>
                    </div>
                <div className="card-action">
                    <button className="btn yellow darken-4" style={{marginRight: 10}}>Login</button>
                    <button className="btn grey lighten-1 black-text">Registration</button>
                </div>
            </div>
           </div>
        </div>
    )
}