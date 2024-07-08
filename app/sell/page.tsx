'use client'
import { TipTapEditor } from "@/components/Editor";
import SelectCategory from "@/components/SelectCategory";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";
import { UploadDropzone } from "../lib/uploadthing";
import { Button } from "@/components/ui/button";
import type { JSONContent } from "@tiptap/react";
import { useFormState } from "react-dom";
import { SellProduct, type State } from "../action";
import { toast } from "sonner";
import SubmitButton from "@/components/SubmitButton";

const SellRoute = () => {
	const initialState:State ={message:'', status: undefined} 
	const [state , formAction] = useFormState(SellProduct, initialState)
	const [json, setJson] = useState<null | JSONContent>(null);
  const [images, setImages] = useState<null  | string[]>(null)
  const [productFile, setProductFile] = useState<null | string>(null)

useEffect(()=>{
	if(state.status === 'success'){
	toast.success(state.message)
	}else if(state.status === 'error'){
		toast.error(state.message)
	}
},[state])
	

	return (
		<section className="min-w-7 mx-auto px-4 md:px-8 mb-14">
			<Card>
				<form action={formAction}>
					<CardHeader>
						<CardTitle>Sell products with ease</CardTitle>
						<CardDescription>
							Please describe your product in details so that it can be sold
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col gap-y-10 ">
						<div className="flex flex-col gap-y-2">
							<Label>Name</Label>
							<Input
								type="text"
								name="nameInput"
								placeholder="Name of your product"
								required 
								minLength={3}
							/>
							{state?.errors?.nameInput?.[0] && (
								<p className="text-destructive">{state?.errors?.nameInput?.[0]}</p>
							)}
						</div>
						<div className="flex flex-col gap-y-2">
							<Label>Category</Label>
							<SelectCategory />
							{state?.errors?.category?.[0] && (
								<p className="text-destructive">{state?.errors?.category?.[0]}</p>
							)}
						</div>

						<div className="flex flex-col gap-y-2">
							<Label>Price</Label>
							<Input placeholder="34$" type="number" name="price" required min={1} />
							{state?.errors?.price?.[0] && (
								<p className="text-destructive">{state?.errors?.price?.[0]}</p>
							)}
						</div>

						<div className="flex flex-col gap-y-2">
							<Label>Small Summary</Label>
							<Textarea
								placeholder="Please describe your products shortly"
								name="smallDescription"
								required 
								minLength={10}
							/>
							{state?.errors?.smallDescription?.[0] && (
								<p className="text-destructive">{state?.errors?.smallDescription?.[0]}</p>
							)}
						</div>

						<div className="flex flex-col gap-y-2">
							<input
								type="hidden"
								name="description"
								value={JSON.stringify(json)}
							/>
							<Label>Description</Label>
							<TipTapEditor json={json} setJson={setJson} />
							{state?.errors?.description?.[0] && (
								<p className="text-destructive">{state?.errors?.description?.[0]}</p>
							)}
						</div>

						<div className="flex flex-col gap-y-2">
              <input type="hidden" name="images" value={JSON.stringify(images)} />
							<Label>Product Image</Label>
							<UploadDropzone endpoint="imageUploader"  onClientUploadComplete={(res)=>{
                setImages(res.map(item => item.url))
								toast.success('Your images have been uploaded!')
              }}  onUploadError={(error : Error)=>{
								toast.error('Something went wrong , try agin')
              }}/>
							{state?.errors?.images?.[0] && (
								<p className="text-destructive">{state?.errors?.images?.[0]}</p>
							)}
						</div>

						<div className="flex flex-col">
              <input type="hidden" name="productFile" value={productFile ?? ''} />
							<Label>Product File</Label>
							<UploadDropzone endpoint="productFileUpload" onClientUploadComplete={(res) => {
                setProductFile(res[0].url)
								toast.success('Your Product file has been uploaded!')
              }}
              onUploadError={(error:Error)=> {
								toast.error('Something went wrong , try agin')
              }} />
								{state?.errors?.productFile?.[0] && (
								<p className="text-destructive">{state?.errors?.productFile?.[0]}</p>
							)}
						</div>
					</CardContent>

					<CardFooter className="mt-5">
						<SubmitButton />
					</CardFooter>
				</form>
			</Card>
		</section>
	);
};

export default SellRoute;
