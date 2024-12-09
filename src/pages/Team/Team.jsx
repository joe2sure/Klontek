import React, { useEffect } from 'react';

import { TeamMembersPageData } from '../../data/dummyData';
import HeroTeam from './HeroTeam/HeroTeam';
import AllTeam from './AllTeam/AllTeam';
import Back from '../../components/Back';

const TeamPage = () => {
  // Use the useEffect hook to replace componentDidMount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  return (
    <>
      <Back title='Expert Team' />
      <HeroTeam />
      <AllTeam data={TeamMembersPageData} />
    </>
  );
};

export default TeamPage;