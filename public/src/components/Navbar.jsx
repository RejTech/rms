import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-brand" href="/">
          <img alt="" height="25" src="files/images/rms-logo.svg" width="25" />
          锐机综合站
        </a>
        <button 
          className="mobile-menu-toggle" 
          type="button" 
          onClick={toggleMenu}
          aria-controls="navbarSupportedContent" 
          aria-expanded={isMenuOpen} 
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <ul className={`navbar-menu ${isMenuOpen ? 'show' : ''}`}>
          <li className="nav-item">
            <a aria-current="page" className="nav-link active" href="/">主页</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/community">社交媒体账号</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/news/list">视频</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/live">直播</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">关于RMS锐机主站</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://rfs.rjtec.site">锐机文件站</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://rejclass.framer.website">锐机班级站</a>
          </li>
          <li className="nav-item">
            <a className="language-btn" href="/en/">Switch to English</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar