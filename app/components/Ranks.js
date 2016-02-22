import React from 'react';
import { CardStack, Card } from 'react-cardstack';
import RankCard from './RankCard';


class Ranks extends React.Component {

	render(){
		return (
			<div className="ranks">
				<CardStack
					width={'80%'}
					background='white'
					hoverOffset={50}>

					<Card background='#white'>
					</Card>
					<Card background='green'>
					    <RankCard rank="01" name="Ram" credits="23.45" />
					</Card>
					<Card background='#008B8B'>
					    <RankCard rank="02" name="Sam" credits="10.20" />
					</Card>
					<Card background='#FFB6C1'>
					    <RankCard rank="03" name="Rakesh" credits="0.00" />
					</Card>
					<Card background='#87CEEB'>
					    <RankCard rank="03" name="Indukuri" credits="-3.45" />
					</Card>
					<Card background='#008080'>
					    <RankCard rank="05" name="Sachin" credits="-5.12" />
					</Card>
					<Card background='#BDB76B'>
					    <RankCard rank="06" name="Bhaskar" credits="-13.67" />
					</Card>
					<Card background='#2F4F4F'>
					    <RankCard rank="07" name="Twitter" credits="-23.45" />
					</Card>
					<Card background='#C0C0C0'>
					    <RankCard rank="08" name="Ravi" credits="-230.45" />
					</Card>

				</CardStack>
			</div>
		);

	}
}


export default Ranks;