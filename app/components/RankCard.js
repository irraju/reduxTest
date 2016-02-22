import React from 'react';

class RankCard extends React.Component {
	render(){
		return (
			<ul className="rankCard">
				<li className="rank">{this.props.rank}</li>
				<li className="name">{this.props.name}</li>
				<li className="credits">{this.props.credits}</li>
			</ul>

		);
	}

}

export default RankCard;