import React from 'react'

const MainContent = () => {
  return (
    <div className="content-section">
      <div className="container">
        <div className="content-card">
          <h5 className="content-title">使用RTOS(Based on TurboWarp)</h5>
          <a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://rfs.rjtec.site/autoredirect?link=rtos">立即查看</a>
          <a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://xw44n-my.sharepoint.com/:u:/g/personal/rej_xw44n_onmicrosoft_com/IQDLpCHmgwf8Q7uAt0PolXieAYph7YGvNiT_9QFJ5ODrUR0?e=8tg2kP">下载离线包</a>
        </div>
        <div className="content-card">
          <h5 className="content-title">
            锐机LLM
            <span className="badge">AD</span>
          </h5>
          <a className="btn btn-primary" href="/ad" target="_blank" rel="noopener noreferrer">立即试用开发版Beta</a>
        </div>
      </div>
    </div>
  )
}

export default MainContent