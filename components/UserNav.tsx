import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

type UserNavProps = {
  email:string ,
  name:string ,
  userImage: string | undefined
}
const UserNav = ({email ,name ,userImage}:UserNavProps) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant={"ghost"} className="relative h-10 w-10 rounded-full">
					<Avatar className="h-10 w-10">
            <AvatarImage src={userImage} alt="user Image"/>
						<AvatarFallback>{name.slice(0,3)}</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>
					<div className="flex flex-col space-y-2">
						<p className="text-sm font-medium leading-none">{name}</p>
						<p className="text-xs leading-none text-muted-foreground">
							{email}
						</p>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem asChild>
						<Link href={'/sell'} >
						Sell your products</Link></DropdownMenuItem>{" "}
					<DropdownMenuItem asChild>
						<Link href={'/settings'}>
						Settings
						</Link></DropdownMenuItem>{" "}
					<DropdownMenuItem>Test Item</DropdownMenuItem>
				</DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <LogoutLink>
            Log Out
          </LogoutLink>
        </DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserNav;
