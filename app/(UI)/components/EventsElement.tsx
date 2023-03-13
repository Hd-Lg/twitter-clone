type Props = {
	competition: string;
	winner: string;
	logo1: any;
	logo2: any;
	team1: string;
	team2: string;
	score1: number;
	score2: number;
};

const EventsElement = ({
	competition,
	winner,
	logo1,
	logo2,
	team1,
	team2,
	score1,
	score2,
}: Props) => {
	return (
		<div>
			<div className='flex justify-between text-sm text-gray-500'>
				<span>{competition}</span>
				<span>Final | {winner} won</span>
			</div>
			<div className='bg-orange-500 flex flex-col text-white text-xl'>
				<div className='flex justify-evenly'>
					<div className='flex'>
						<svg href={logo1} className='w-10 h-10' />
						<p>{team1}</p>
					</div>
					<span>{score1}</span>
				</div>
			</div>
			<div className='bg-orange-500 flex flex-col text-white text-xl'>
				<div className='flex justify-evenly'>
					<div className='flex'>
						<svg href={logo2} className='w-10 h-10' />
						<p>{team2}</p>
					</div>
					<span>{score2}</span>
				</div>
			</div>
		</div>
	);
};

export default EventsElement;
