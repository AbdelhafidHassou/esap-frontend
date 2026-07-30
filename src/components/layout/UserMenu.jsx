import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ChevronDown, User, LifeBuoy, LogOut } from "lucide-react"
import {
    DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
    DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuGroup,
} from "@/components/ui/dropdown-menu"
import {
    AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader,
    AlertDialogTitle, AlertDialogDescription, AlertDialogFooter,
    AlertDialogCancel, AlertDialogAction,
} from "@/components/ui/alert-dialog"

export default function UserMenu({ firstName, lastName, email }) {
    const navigate = useNavigate()
    const [confirmOpen, setConfirmOpen] = useState(false)

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 text-sm">
                    <span>{firstName} {lastName}</span>
                    <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 rounded-sm">
                    <DropdownMenuGroup>
                        <DropdownMenuLabel className="font-normal">
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-medium text-black">{firstName} {lastName}</span>
                                <span className="text-muted-foreground truncate text-xs">{email}</span>
                            </div>
                        </DropdownMenuLabel>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem onClick={() => navigate("/account")} className="transition-colors duration-300 ease-in-out">
                            <User className="h-4 w-4" /> Mon compte
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate("/support")} className="transition-colors duration-300 ease-in-out">
                            <LifeBuoy className="h-4 w-4" /> Support
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem onClick={() => setConfirmOpen(true)} className="transition-colors duration-300 ease-in-out">
                            <LogOut className="h-4 w-4" /> Se déconnecter
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
                <AlertDialogContent className="rounded-sm">
                    <AlertDialogHeader>
                        <AlertDialogTitle>Se déconnecter ?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Vous devrez saisir un nouveau code pour vous reconnecter.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel className="rounded-sm transition-colors duration-300 ease-in-out">Annuler</AlertDialogCancel>
                        <AlertDialogAction className="rounded-sm transition-colors duration-300 ease-in-out bg-[#7b2cbf] hover:bg-[#c77dff]" onClick={() => navigate("/login")}>
                            Se déconnecter
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}