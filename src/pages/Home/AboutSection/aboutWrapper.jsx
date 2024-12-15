import React from "react"
import { awrapper } from "../../../data/dummyData.js"

const AboutWrapper = () => {
  return (
    <section className='awrapper'>
      <div className='container awrapper-grid'>
        {awrapper.map((val, index) => (
          <div key={index} className='awrapper-box'>
            <div className='awrapper-img'>
              <img src={val.cover} alt={val.title} />
            </div>
            <div className='awrapper-text'>
              <h1>{val.data}</h1>
              <h3>{val.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutWrapper;


// import React from "react"
// import { awrapper } from "../../../data/dummyData.js"

// const Aboutwrapper = () => {
//   return (
//     <>
//       <section className='awrapper'>
//         <div className='container grid'>
//           {awrapper.map((val) => {
//             return (
//               <div className='box flex'>
//                 <div className='img'>
//                   <img src={val.cover} alt='' />
//                 </div>
//                 <div className='text'>
//                   <h1>{val.data}</h1>
//                   <h3>{val.title}</h3>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </section>
//     </>
//   )
// }

// export default Aboutwrapper