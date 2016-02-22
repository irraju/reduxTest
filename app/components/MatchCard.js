import React from 'react';
import Countdown from 'react-cntdwn';
import IconLock from 'react-icons/lib/fa/lock'


class MatchCard extends React.Component {

	render(){
		var format = {hour:'hh:mm:ss'}
		return (
			<ul className="matchCard">
				<li className="date">{this.props.date}</li>
				<li className="match">
					{this.props.match}
					<span className="countDown">
						Locked in 
						<Countdown targetDate={new Date('August 29, 2017')}
		           			startDelay={2000}
		           			interval={1000}
		           			format={format}/>
	           		</span>	
				</li>
				<li className="odds">{this.props.odds}</li>


			</ul>
		);
	}

}

export default MatchCard;