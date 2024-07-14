import {
	Card,
} from "@/components/ui/card";

import React from "react";

import SellForm from "@/components/form/sellForm";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "../lib/db";
import { redirect } from "next/navigation";


const getData =async (userId: string) =>{
		const data = await prisma.user.findUnique({
			where:{
				id:userId
			},
			select:{
				stripeConnectedLinked:true,
			}
		})
		if(data?.stripeConnectedLinked === false){
			return redirect('/billing')
		}
		return null
}

const SellRoute = async () => {

	const {getUser} = getKindeServerSession()
	const user = await getUser()
	if(!user || !user.id || user === undefined){
		throw new Error('Unauthorized user !')
	}
	

	return (
		<section className="min-w-7 mx-auto px-4 md:px-8 mb-14">
			<Card>
			<SellForm />
			</Card>
		</section>
	);
};

export default SellRoute;
