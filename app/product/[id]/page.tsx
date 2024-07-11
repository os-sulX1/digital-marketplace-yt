import prisma from "@/app/lib/db";
import ProductDescription from "@/components/ProductDescription";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import type { JSONContent } from "@tiptap/react";

const getData = async (id: string) => {
	const data = await prisma.product.findUnique({
		where: {
			id: id,
		},
		select: {
			category: true,
			description: true,
			smallDescription: true,
			name: true,
			images: true,
			price: true,
			createdAt: true,
			User: {
				select: {
					profileImage: true,
					firstName: true,
				},
			},
		},
	});
	return data;
};

const ProductPage = async ({ params }: { params: { id: string } }) => {
	const data = await getData(params.id);
	return (
		<section className="max-w-7xl mx-auto px-4 lg:px-8 lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
			<Carousel className="lg:row-end-1 lg:col-span-4">
				<CarouselContent>
					{data?.images.map((image, index) => (
						<CarouselItem key={index}>
							<div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
								<Image
									src={image as string}
									alt="Product Image"
									fill
									className="object-cover w-full h-full rounded-lg"
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="ml-20" />
				<CarouselNext className="mr-20" />
			</Carousel>

			<div className="sm:max-w-2xl mx-auto mt-5 lg:mt-0 lg:row-span-2 lg:col-span-3 lg:w-full ">
				<h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
					{data?.name}
				</h1>

				<p className="mt-2 text-muted-foreground font-medium tracking-widest">
					{data?.smallDescription}
				</p>

				<Button className="w-full mt-10" size={"lg"}>
					Buy for ${data?.price}
				</Button>

				<div className=" border-t-4 border-gray-200 my-10 pt-10" />

				<div className="grid grid-cols-2 w-full gap-y-3">
					<h3 className="text-sm font-medium text-muted-foreground col-span-1">
						Released:
					</h3>
					<h3 className="text-sm font-medium col-span-1">
						{new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
							data?.createdAt,
						)}
					</h3>

					<h3 className="text-sm font-medium text-muted-foreground col-span-1">
						Category:
					</h3>
					<h3 className="text-sm font-medium col-span-1">{data?.category}</h3>
				</div>
			</div>
      <div className="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4">
        <ProductDescription content={data?.description as JSONContent}/>
      </div>
		</section>
	);
};

export default ProductPage;
