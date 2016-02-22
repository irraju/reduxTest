import React from 'react';
import Ranks from './Ranks';
import Matches from './Matches';
import HomeBar from './HomeBar';
import Tabs from 'react-tabs-navigation'



class Home extends React.Component {
	render(){
		return (
			<div className="home">
				<HomeBar />
				<Tabs
					  tabsClassName='tabs'
					  tabs={[
					    {
					      children: () => (
					      	<Ranks />
					      ),
					      displayName: 'RANKS'
					    },
					    {
					      children: () => (
					      	<Matches />
					      ),
					      displayName: 'MATCHES'
					    }
					  ]}
					/>
			</div>
		);
	}
}

export default Home;

