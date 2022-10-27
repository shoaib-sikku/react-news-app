import React from 'react'
import '../main.css'
const Footer = () => {
  return (
    <>
      <div className='container-fluid footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <img src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' width={148} height={72}></img>
                    <p>Inshorts Pte. Ltd.
                       ©COPYRIGHT 2022</p>
                </div>
                <div className='col-4'>
                    <h2>Contact Us</h2>
                    <p>Terms & conditions
                       Privacy Policies</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
