import React from "react"
import TeamCard from "./TeamCard"
import "./Team.css"

import "../../pages/About/About.css"
import Back from "../../components/Back"
import Aboutwrapper from "../Home/AboutSection/aboutWrapper"

const Team = () => {
  return (
    <>
      <Back title='Team' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <Aboutwrapper />
    </>
  )
}

export default Team;




// import React, { useEffect } from 'react';

// import { TeamMembersPageData } from '../../data/dummyData';
// import HeroTeam from './HeroTeam/HeroTeam';
// import AllTeam from './AllTeam/AllTeam';
// import Back from '../../components/Back';

// const TeamPage = () => {
//   // Use the useEffect hook to replace componentDidMount
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []); // Empty dependency array ensures this runs only once after the component mounts

//   return (
//     <>
//       <Back title='Team' />
//       <main id="main">   
//       <HeroTeam />
//       <AllTeam data={TeamMembersPageData} />
//         {/* <ManagementSection />
//         <AboutSection /> */}
//       </main>
//       {/* <Back title='Expert Team' />
//       <HeroTeam />
//       <AllTeam data={TeamMembersPageData} /> */}
//     </>
//   );
// };

// export default TeamPage;