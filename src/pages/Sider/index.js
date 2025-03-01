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

      {/* Sidebar Menu */}
      <div className="flex-grow">
        <nav className="flex flex-col gap-1">
          {/* Campaigns Menu */}
          <div>
            <button
              onClick={() => setIsCampaignsOpen(!isCampaignsOpen)}
              className="flex items-center gap-2 px-6 py-3 text-lg hover:bg-blue-800 transition duration-200 w-full"
            >
              <FontAwesomeIcon icon={faInbox} />
              Campaigns
              <FontAwesomeIcon className={`ml-auto transform ${isCampaignsOpen ? 'rotate-180' : ''}`} icon={faChevronRight} />
            </button>
            {isCampaignsOpen && (
              <div className="pl-10">
                <Link to="/sub-campaign1" className="block text-sm py-2 px-6 hover:bg-blue-800">Sub Campaign 1</Link>
                <Link to="/sub-campaign2" className="block text-sm py-2 px-6 hover:bg-blue-800">Sub Campaign 2</Link>
              </div>
            )}
          </div>

          {/* Other Menu Items */}
          <Link to="/integrations" className="flex items-center gap-2 px-6 py-3 text-lg hover:bg-blue-800 transition duration-200">
            <FontAwesomeIcon icon={faChartBar} />
            Integrations
          </Link>
          <Link to="/audience" className="flex items-center gap-2 px-6 py-3 text-lg hover:bg-blue-800 transition duration-200">
            <FontAwesomeIcon icon={faUser} />
            Audience
          </Link>
          <Link to="/billing" className="flex items-center gap-2 px-6 py-3 text-lg hover:bg-blue-800 transition duration-200">
            <FontAwesomeIcon icon={faMobileAlt} />
            Billing
          </Link>
          <Link to="/manage-apps" className="flex items-center gap-2 px-6 py-3 text-lg hover:bg-blue-800 transition duration-200">
            <FontAwesomeIcon icon={faInbox} />
            Manage Apps
          </Link>
          <Link to="/manage-users" className="flex items-center gap-2 px-6 py-3 text-lg hover:bg-blue-800 transition duration-200">
            <FontAwesomeIcon icon={faUser} />
            Manage Users
          </Link>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="mt-auto p-6 ">
        <Link to="/settings" className="flex items-center gap-2 px-6 py-3 text-lg hover:bg-blue-800 transition duration-200 w-full">
          <FontAwesomeIcon icon={faCog} />
          Settings
        </Link>
        <button
          onClick={() => alert("Sign Out")}
          className="flex items-center gap-2 px-6 py-3 text-lg text-blue-100 hover:bg-blue-800 transition duration-200 w-full"
        >
          <FontAwesomeIcon icon={faSignOutAlt} />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
