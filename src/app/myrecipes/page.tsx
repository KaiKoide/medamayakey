import CartRecipes from '@/app/myrecipes/CartRecipes';
import Cartbar from '@/components/Cartbar';

export default function Myrecipes() {
	return (
		<>
			<div className='flex flex-col lg:flex-row h-full w-full'>
				<main className='flex-1 p-9 h-full w-full'>
					<CartRecipes />
				</main>
				<Cartbar />
			</div>
		</>
	);
}
