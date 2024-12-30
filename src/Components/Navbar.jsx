import React from 'react'

const Navbar = ({setCategory}) => {

    
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" to=""><span className='badge bg-light text-dark fs-4'>Bulletin</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav" style={{cursor:'pointer'}}>
       
        <li className="nav-item" >
          <a className="nav-link" to="/techology"  onClick={() => setCategory('technology')} >Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="/business"  onClick={() => setCategory('business')}>Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="/health" onClick={()=> setCategory('health')}>Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="/science" onClick={()=>setCategory('science')}>Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="/sports" onClick={()=>setCategory('sports')}>Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="/entertainment" onClick={()=>setCategory('entertainment')}>Entertainment</a>
        </li>
       
       
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
