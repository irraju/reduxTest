import React from 'react';
import { CardStack, Card } from 'react-cardstack';
import MatchCard from './MatchCard';


class Matches extends React.Component {

	render(){
		return (
			<div className="ranks">
				<CardStack
					height={1000}
					width={'80%'}
					hoverOffset={50}>


					<Card background='white'>
					</Card>

					<Card background='#FF7F50'>
						<MatchCard date='FRI 21-02-2016' match='IND vs BAN' odds='2:3'/>
					</Card>
					<Card background='#FFB6C1'>
						<MatchCard date='SAT 22-02-2016' match='SL vs ENG' odds='5:7'/>
					</Card>
					<Card background='#CD5C5C'>
						<MatchCard date='SUN 23-02-2016' match='SA vs AUS' odds='12:3'/>
					</Card>
					<Card background='#F4A460'>
						<MatchCard date='MON 24-02-2016' match='ZIM vs KEN' odds='1:1'/>
					</Card>
					<Card background='#66CDAA'>
						<MatchCard date='TUE 25-02-2016' match='WI vs CAN' odds='4:5'/>
					</Card>
					<Card background='#4682B4'>
						<MatchCard date='WED 26-02-2016' match='PAK vs NEP' odds='1:11'/>
					</Card>
					<Card background='#8B008B'>
						<MatchCard date='THU 27-02-2016' match='SL vs IND' odds='12:33'/>
					</Card>
					<Card background='#808080'>
						<MatchCard date='FRI 28-02-2016' match='YOU vs ME' odds='1:3'/>
					</Card>


				</CardStack>
			</div>
		);

	}
}


export default Matches;