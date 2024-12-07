import React from "react"
import logo from '../../assets/images/logo.png' // Assuming you have a logo image in the assets folder

const LogoNavbar = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <img src={logo} alt="Company Logo" className="logo-image" />
          </div>

          <div className='social'>
            <div className='social-icon-container'>
              <i className='fab fa-facebook-f icon'></i>
            </div>
            <div className='social-icon-container'>
              <i className='fab fa-instagram icon'></i>
            </div>
            <div className='social-icon-container'>
              <i className='fab fa-twitter icon'></i>
            </div>
            <div className='social-icon-container'>
              <i className='fab fa-youtube icon'></i>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LogoNavbar;

// import React from "react"
// import logoImage from '../../assets/images/logo.png'

// const LogoNavbar = () => {
//   return (
//     <>
//       <section className='head'>
//         <div className='container flexSB'>
//           {/* <div className='logo'>
//             <h1>Klontek</h1>
//             <h3>Think it, Tech it...</h3>
//           </div> */}
//           <div className="logo">
//             <img src={logoImage} alt="Logo" className="logo-image" />
//           </div>

//           <div className='social'>
//             <i className='fab fa-facebook-f icon'></i>
//             <i className='fab fa-instagram icon'></i>
//             <i className='fab fa-twitter icon'></i>
//             <i className='fab fa-youtube icon'></i>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default LogoNavbar;