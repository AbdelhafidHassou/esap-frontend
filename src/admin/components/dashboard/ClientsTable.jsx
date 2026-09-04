import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export default function ClientsTable({ clients }) {
    return (
        <Card className="rounded-sm bg-card shadow-lg min-w-0">
            <CardHeader>
                <CardTitle>Clients</CardTitle>
                <p className="text-muted-foreground text-sm">
                    Tous les clients de la plateforme
                </p>
            </CardHeader>
            <CardContent className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nom du client</TableHead>
                            <TableHead>Contact</TableHead>
                            <TableHead>Nombre d'employés</TableHead>
                            <TableHead>Statut</TableHead>
                            <TableHead>Date de création</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {clients.map((c) => (
                            <TableRow key={c.id}>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-xs font-medium text-primary">
                                            {c.name[0]}
                                        </span>
                                        <span className="font-medium text-foreground">{c.name}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-col">
                                        <span className="text-foreground">
                                            {c.contact.firstName} {c.contact.lastName}
                                        </span>
                                        <span className="text-muted-foreground text-xs">
                                            {c.contact.email}
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell>{c.employeeCount}</TableCell>
                                <TableCell>
                                    <Badge variant={c.status === "active" ? "default" : "secondary"}>
                                        {c.status === "active" ? "Actif" : "Inactif"}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    {format(new Date(c.createdAt), "dd/MM/yyyy", { locale: fr })}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}