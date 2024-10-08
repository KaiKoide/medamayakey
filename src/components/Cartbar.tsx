'use client';
import {
	deleteShoppingItem,
	getShoppingListItems,
} from '@/actions/db/firebase/firestore';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useApp } from '@/contexts/AppContext';
import type Item from '@/types/item';
import { ShoppingCart, Trash2 } from 'lucide-react';
import { useEffect } from 'react';

export default function Cartbar() {
	const { cartItems, setCartItems } = useApp();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const fetchData = async () => {
			const shoppingListItems = await getShoppingListItems();
			if (shoppingListItems) setCartItems(shoppingListItems);
		};

		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleDeleteItem = async (id: string) => {
		try {
			await deleteShoppingItem(id);
			setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
		} catch (error) {
			console.error('Error deleting cart item:', error);
		}
	};

	return (
		<aside className='lg:max-w-72 lg:min-w-72 border-l'>
			<div className='flex items-center p-4 border-b '>
				<ShoppingCart className='mr-2' />
				<h2>Item to buy</h2>
			</div>
			{cartItems && cartItems.length > 0 ? (
				<>
					<ScrollArea className='h-full'>
						<ul>
							{cartItems.map((cartItem: Item) => (
								<li
									value={cartItem.id}
									key={cartItem.id}
									id={cartItem.id}
									className='border-b px-6 p-2'
								>
									<div className='flex justify-between items-center w-full gap-4'>
										<div>
											<h3 className='mb-1'>{cartItem.name}</h3>
										</div>
										{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
										<button
											className='w-8'
											onClick={() => handleDeleteItem(cartItem.id as string)}
										>
											<Trash2 className='h-4 w-4 stroke-red-600 shrink-0 transition-transform duration-200' />
										</button>
									</div>
								</li>
							))}
						</ul>
					</ScrollArea>
				</>
			) : (
				<div className='h-screen text-center mt-5'>
					<p>Cart is empty.</p>
				</div>
			)}
		</aside>
	);
}
