import Image from 'next/image';
import HomeImage from '../../public/home.webp';
import LogoImage from '../../public/logo.svg';

export default function Home() {
	return (
		<>
			<main>
				<div className='sm:flex w-full home-h'>
					<Image
						src={HomeImage}
						className='object-cover w-12/12 sm:w-6/12'
						alt='Medamayakey HomeImage'
					/>
					<Image
						src={LogoImage}
						alt='Medamayakey Logo'
						width={450}
						height={450}
					/>
				</div>
			</main>
		</>
	);
}
