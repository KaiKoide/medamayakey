import Image from 'next/image';
import HomeImage from '../../public/home.webp';
import LogoImage from '../../public/logo.svg';

export default function Home() {
	return (
		<>
			<main>
				<div className='relative md:static flex w-full home-h'>
					<Image
						src={HomeImage}
						className='object-cover w-full md:w-1/2'
						alt='Medamayakey HomeImage'
					/>
					<Image
						src={LogoImage}
						alt='Medamayakey Logo'
						width={400}
						height={400}
						className='block absolute md:static top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:inset-0 md:translate-x-0 md:translate-y-0'
					/>
				</div>
			</main>
		</>
	);
}
