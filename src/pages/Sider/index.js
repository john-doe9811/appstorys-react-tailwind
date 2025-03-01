import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faUser, faCog, faSignOutAlt, faChartBar, faMobileAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isCampaignsOpen, setIsCampaignsOpen] = useState(false);

  return (
    <div className="h-screen text-white w-80 flex flex-col " style={{backgroundColor:'#1f4d9c'}}>
      {/* Header */}
      <div className="p-6 text-4xl font-bold">
        AppStorys
      </div>


    </div>
  );
};

export default Sidebar;
