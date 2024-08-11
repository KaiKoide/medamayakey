'use client';
import Loading from '@/components/Loading';
import type RecipeData from '@/types/recipe';
import type { Step } from '@/types/recipe';
import { ChefHat, CookingPot, Fish } from 'lucide-react';
import Image from 'next/image';
import { RecipesItemButton } from './RecipesItemButton';

interface RecipeDetailProps {
	recipeDetail: RecipeData | undefined;
}

export default function RecipeDetail({ recipeDetail }: RecipeDetailProps) {
	if (!recipeDetail) {
		return <Loading />;
	}

	if (!recipeDetail.image) {
		recipeDetail.image =
			'https://placehold.jp/c1c1c2/ffffff/630x420.png?text=Image%20Not%20Found';
	}

	return (
		<div className='flex flex-col items-center'>
			<h1 className='text-3xl mb-8 font-bold	'>{recipeDetail.title}</h1>
			<div className='flex justify-between w-full mb-6'>
				<div className='flex gap-5'>
					<p className='flex items-center whitespace-nowrap'>
						Servings: <span>{recipeDetail.servings}</span>
					</p>
					<p className='flex items-center whitespace-nowrap'>
						Total Time: <span>{recipeDetail.readyInMinutes}</span>
					</p>
				</div>
				<RecipesItemButton recipe={recipeDetail} />
			</div>
			<div className='lg:flex flex-col'>
				<div className='mb-4 flex justify-center'>
					<Image
						src={recipeDetail.image}
						alt={recipeDetail.title}
						width={700}
						height={300}
						className='rounded-md'
					/>
				</div>
				<div className='flex-1 mb-10'>
					<div className='mt-10 mb-2 flex items-center font-bold text-xl'>
						<CookingPot />
						<h2 className='ml-2 text-xl font-extrabold'>Summary</h2>
					</div>
					<p
						className='leading-relaxed text-lg'
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						dangerouslySetInnerHTML={{ __html: recipeDetail.summary }}
					/>
				</div>
				<div className='mt-14'>
					<div className='mt-10 mb-2 flex items-center'>
						<Fish />
						<h2 className='ml-2 text-xl font-extrabold'>Ingredients</h2>
					</div>
					<ul className='list-disc'>
						{recipeDetail.extendedIngredients.map((ingredient) => (
							<li key={ingredient.id} className='pr-2 mb-3 text-lg'>
								{ingredient.original}
							</li>
						))}
					</ul>
				</div>
				<div className='mt-14'>
					<div className='mt-10 mb-2 flex items-center'>
						<ChefHat />
						<h2 className='ml-2 text-xl font-extrabold'>Recipe Steps</h2>
					</div>
					<ol className='list-decimal'>
						{recipeDetail.analyzedInstructions[0].steps.map((step: Step) => (
							<li key={step.number} className='mb-5 text-lg'>
								{step.step}
							</li>
						))}
					</ol>
				</div>
			</div>
		</div>
	);
}
