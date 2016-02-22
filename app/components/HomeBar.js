import React from 'react';
import NumberWithLabel from './NumberWithLabel';
import Ranks from './Ranks';

import classNames from 'classnames';

class HomeBar extends React.Component {

    constructor(props){
        super(props);
    }

	render(){
		var props = this.props;
		return(
			<div className="homeBar">
				<div className="profileImg">
					<img className="imageCircle" src='./defaultUser.jpg' />
				</div>
				<div className="rank">
					<NumberWithLabel bigNumber={props.rank} label="rank" />
				</div>
				<div className="credits">
					<NumberWithLabel bigNumber={props.credits} label="credits" />
				</div>
			</div>
		);
	};
}

HomeBar.propTypes = {
  rank: React.PropTypes.number,
  profileImg: React.PropTypes.string,
  credits: React.PropTypes.number
};


HomeBar.defaultProps = {
	rank:32,
	profileImg:"textForNow",
	credits: 25.05
};

export default HomeBar;
