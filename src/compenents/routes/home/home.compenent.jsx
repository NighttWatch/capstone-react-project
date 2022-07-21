import { Outlet } from 'react-router-dom';

import Directory from '../../directory/directory.compenent';

const Home = () => {

  return (
    <div>
        <Outlet/>
        <Directory />
        
    </div>
  );
}

export default Home;