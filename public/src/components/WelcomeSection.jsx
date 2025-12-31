import React, { useState } from 'react'

const WelcomeSection = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    suggestion: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('表单提交:', formData)
    alert('感谢您的反馈！')
    setFormData({ email: '', suggestion: '' })
  }

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen)
  }

  return (
    <div className="welcome-section">
      <div className="container">
        <div className="welcome-content">
          <img 
            alt="" 
            height="150" 
            src="files/images/rms-logo.svg" 
            width="150" 
            className="logo-spin"
          />
          <h1 className="welcome-title">欢迎来到锐机综合站</h1>
          <p className="welcome-description">这里为你提供综合性的锐机信息</p>
          <a className="btn btn-primary" href="changelogview.html">更新日志(CHANGELOG)</a>
          
          <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-header">
                <button 
                  className="accordion-button"
                  onClick={toggleAccordion}
                  type="button"
                >
                  提供反馈
                </button>
              </div>
              <div className={`accordion-collapse ${isAccordionOpen ? 'show' : ''}`}>
                <div className="accordion-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email-input">电邮联系地址</label>
                      <input 
                        type="email" 
                        name="email" 
                        className="form-control" 
                        id="email-input"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <div className="form-text">我们不会将你的电邮分享给他人，或做其他用处</div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="suggestion-input">留下你的建议</label>
                      <input 
                        type="text" 
                        name="suggestion" 
                        className="form-control" 
                        id="suggestion-input"
                        value={formData.suggestion}
                        onChange={handleInputChange}
                      />
                    </div>
                    <button className="btn btn-primary" type="submit">提交</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeSection