"use client"

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,

} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const UserDropdown = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        router.push('/sign-in');
    }
    const user = {name: 'Yamlak', emal: 'yamlaknegash11@gmail.com'};
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={`ghost`} className="flex items-center gap-3 text-gray-4 hover:text-yellow-500">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="/images/yamlak.jpg" />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-small font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    {/* @ 33:06 */}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default UserDropdown
