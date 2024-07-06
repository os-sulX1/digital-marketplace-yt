import { ChefHat, Globe, PartyPopper } from "lucide-react";
import type { ReactNode } from "react";

type categoryItemsProps = {
	name: string;
	title: string;
	Image: ReactNode;
	id: number;
};

export const categoryItems: categoryItemsProps[] = [
	{
		id: 0,
		name: "template",
		title: "Template",
		Image: <Globe />,
	},
	{
		id: 1,
		name: "uikit",
		title: "Ui Kit",
		Image: <ChefHat />,
	},
  {
id:2,
name:'icon',
title:'Icon',
Image:<PartyPopper />
  }
];
