'use client';
import { fetchRecipeDetail } from '@/actions/api/fetchRecipesData';
import RecipeDetail from '@/app/search/RecipeDetail';
import Loading from '@/components/Loading';
import type RecipeData from '@/types/recipe';
import { Cookie, Fish } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Modal } from './modal';

interface RecipeDetailPageProps {
	params: {
		id: string;
	};
}

export default function RecipeDetailModal({ params }: RecipeDetailPageProps) {
	const [recipeDetail, setRecipeDetail] = useState<RecipeData>();

	useEffect(() => {
		const fetchApi = async () => {
			try {
				const response = await fetchRecipeDetail(params.id);
				setRecipeDetail(response);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchApi();
	}, [params.id]);

	if (!recipeDetail) {
		return <Loading />;
	}

	return (
		<Modal>
			<RecipeDetail recipeDetail={recipeDetail} />
		</Modal>
	);
}
