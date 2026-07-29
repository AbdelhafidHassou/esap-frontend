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
                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuGroup>
                        <DropdownMenuLabel className="text-muted-foreground text-sm font-normal">
                            {email}
                        </DropdownMenuLabel>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem onClick={() => navigate("/account")}>
                            <User className="h-4 w-4" /> Mon compte
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate("/support")}>
                            <LifeBuoy className="h-4 w-4" /> Support
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem onClick={() => setConfirmOpen(true)}>
                            <LogOut className="h-4 w-4" /> Se déconnecter
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Se déconnecter ?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Vous devrez saisir un nouveau code pour vous reconnecter.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Annuler</AlertDialogCancel>
                        <AlertDialogAction onClick={() => navigate("/login")}>
                            Se déconnecter
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}