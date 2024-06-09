import React from 'react'

export default function Navbar(props) {
    let darkbtntext= props.mode=='dark'? 'light':'dark';
   
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top " data-bs-theme={props.mode} >
            <div className="container-fluid">
           
                <a className="navbar-brand" href="#">
                <img src="/icon.png" alt="logo" width="40px" className='mx-2'  />
                 BARTA 24</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        {/* Dark mode switch */}
                      <div className="cotainer mx-5" >
                      <div className={'form-check form-switch my-2 text-'+darkbtntext} id='darkmodebtn'>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label"  >Dark Mode</label>
                        </div>
                      </div>
                      


                    </ul>

                </div>
            </div>
        </nav>
    )
}
