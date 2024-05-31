import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const DownloadApp = () => {
  return (
    <div className='downloadApp' id='downloadApp'>
        <p>For Better Experience Download <br /> SwiftOrder App</p>
        <div className="appPlatforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default DownloadApp