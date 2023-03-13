import Nashvile from '../assets/Nashville_Predators_Logo.svg';
import EventsElement from './EventsElement';

const Events = () => {
	return (
		<div>
			<h2>What's happening</h2>
			<EventsElement
				competition='NHL'
				score1={5}
				team1='Nashville Predators'
				winner='NSH'
				logo1={Nashvile}
				score2={2}
				team2='Anaheim Ducks'
			/>
			<EventsElement
				competition='NBA'
				score1={102}
				team1='Oklahoma City Thunder'
				winner='OKC'
				logo1={Nashvile}
				score2={90}
				team2='San Antonio Spurs'
			/>
			<EventsElement
				competition='NBA'
				score1={110}
				team1='Portland Trail Blazers'
				winner='NOP'
				logo1={Nashvile}
				score2={127}
				team2='New Orleans Pelicans'
			/>
			<EventsElement
				competition='NHL'
				score1={1}
				team1='Ottawa Senators'
				winner='CGY'
				logo1={Nashvile}
				score2={5}
				team2='Calgary Flames'
			/>
			<EventsElement
				competition='Premier League'
				score1={0}
				team1='Fulham FC'
				winner='ARS'
				logo1={Nashvile}
				score2={3}
				team2='Arsenal'
			/>
			<p className='text-blue-700 text-sm'>Show more</p>
		</div>
	);
};

export default Events;
