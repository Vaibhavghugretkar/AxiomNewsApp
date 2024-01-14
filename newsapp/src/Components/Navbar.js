import React from 'react'
const Navbar=(props) =>{
  const isDarkMode = props.mode === 'dark';
    return (
      <div>
 <nav className={`navbar navbar-${props.mode} bg-${props.mode} navbar-expand-lg`}>
  <div className="container-fluid">
    <a className={`navbar-brand text-${isDarkMode ? 'light' : 'dark'}`} href="/"> <strong> AXIOM</strong></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>     

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/business">Business</a>
        </li>     
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/science">Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/entertainment">Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/sports">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/health">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/technology">Technology</a>
        </li>
      </ul>
      <div className="form-check form-switch mr-5">
    <input className="form-check-input" type="checkbox" role="switch"  onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
    <label className={`form-check-label text-${isDarkMode ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">
              {isDarkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}
            </label>
</div>
    </div>
  </div>
</nav>
      </div>
    )
  
}

export default Navbar
