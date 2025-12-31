import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-5 py-3 bg-light text-center">
      <div>
        版本号-β.25.1227.1<br />
        <a href="https://github.com/RejTech/rejmainsite">Github项目 - 前往Github源码区</a>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '8px 0' }}>
        <img src="files/images/DAEcn.png" alt="DAE" className="icon-container" style={{ height: '24px' }} />
        <img src="files/images/MLScn.png" alt="MLS" className="icon-container" style={{ height: '24px' }} />
      </div>
      
      <div>
        <a href="licenseview.html">Apache2.0许可证 —— 版权所有 锐机科技2026</a>
      </div>
    </footer>
  )
}

export default Footer