import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import HomeImage from '../../public/home.webp';

export default function Home() {
	return (
		<>
			<main>
				<div className='sm:flex w-full home-h'>
					<Image
						src={HomeImage}
						className='object-cover w-12/12 sm:w-6/12'
						alt='Fridgefy HomeImage'
					/>
				</div>
			</main>
		</>
	);
}
