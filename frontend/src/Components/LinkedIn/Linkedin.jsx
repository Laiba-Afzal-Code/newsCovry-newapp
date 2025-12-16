import React from 'react'
import "./Linkedin.css"
import { Link } from 'react-router-dom'
const Linkedin = () => {
  return (
    <>
    <div className="up">
      <div className="itext">
<div className="maint">
  <h1 className="headl">Globly Saty Updating with NewsCovry</h1>
  <p className="plink">Always stay updated with fresh and informative news. Explore our Linked Page for real-time global updates and insights.</p>
  <button className='linkbtn'><Link className='linka' target="_blank" to="https://www.linkedin.com/company/newscovry/">Explore on LinkedIn</Link></button>
</div>
      </div>
    </div>
    </>
  )
}

export default Linkedin