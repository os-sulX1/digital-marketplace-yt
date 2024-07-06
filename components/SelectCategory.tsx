'use client'
import { categoryItems } from "@/app/lib/categoryItem";
import React, { useState } from "react";
import { Card, CardHeader } from "./ui/card";

const SelectCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
			{categoryItems.map((item) => (
				<div className="cursor-pointer" key={item.id}>
					<Card onClick={()=>setSelectedCategory(item.name)}
          className={selectedCategory === item.name ? 'border-primary border-2' : 'border-2 border-primary/10'}>
						<CardHeader>
							{item.Image} <h3>{item.title}</h3>
						</CardHeader>
					</Card>
				</div>
			))}
		</div>
	);
};

export default SelectCategory;
