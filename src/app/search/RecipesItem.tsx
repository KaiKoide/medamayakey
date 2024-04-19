'use client';
import Image from 'next/image';
import Link from 'next/link';
import RecipeData from '@/types/recipe';
import { useCallback, useEffect, useState } from 'react';
import { fetchRecipesData } from '@/actions/api/fetchRecipesData';
import { RecipesItemButton } from './RecipesItemButton';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';


export default function RecipesItem() {
  const [recipeData, setRecipeData] = useState<RecipeData[]>([]);
  const { fetchedRecipesData, setFetchedRecipesData } = useApp();

  const recipesItems = useCallback(async () => {
    const items = await fetchRecipesData();
    setFetchedRecipesData(items.recipes); // 取得したレシピデータを fetchedRecipesData に設定
    setRecipeData(items.recipes); // レシピデータを recipeData に設定
    console.log("fetchedRecipesData", fetchedRecipesData);
    return items;
  }, []);

  useEffect(() => {
    recipesItems();
    }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3  gap-4">
      {recipeData.map((recipe: RecipeData) => (
        <div className="rounded-md w-full bg-white shadow-md" key={recipe.id}>
          <Link href={`/search/${recipe.id}`}>
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={640}
              height={100}
              className="rounded-t-md"
            />
          </Link>

          <div className="p-4">
            <h2 className="line-clamp-2">{recipe.title}</h2>
            <div className="flex gap-2 justify-between mt-4">
              <Button asChild className="w-full" size="sm" variant="outline">
                <Link href={`/search/${recipe.id}`}>More</Link>
              </Button>
              <RecipesItemButton recipe={recipe} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
