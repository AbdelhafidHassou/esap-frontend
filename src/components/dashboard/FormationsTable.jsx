import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const STATUS_CONFIG = {
  not_started: { label: "Non commencée", className: "bg-gray-100 text-gray-700" },
  in_progress: { label: "En cours", className: "bg-[#f3e8ff] text-[#7b2cbf]" },
  awaiting_final_test: { label: "En attente du test", className: "bg-amber-100 text-amber-700" },
  awaiting_ssi: { label: "En attente SSI", className: "bg-amber-100 text-amber-700" },
  validated: { label: "Validée", className: "bg-green-100 text-green-700" },
  failed: { label: "Échouée", className: "bg-red-100 text-red-700" },
}

export default function FormationsTable({ formations = [] }) {
  return (
    <Card className="rounded-sm bg-white shadow-lg  ">
      <CardContent className="p-6">
        <p className="text-[#7b2cbf] mb-4 text-lg font-semibold">Mes formations</p>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Département</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Échéance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {formations.map((f) => {
                const status = STATUS_CONFIG[f.status] ?? { label: f.status, className: "" }
                return (
                  <TableRow key={f.departmentId}>
                    <TableCell className="font-medium">{f.departmentName}</TableCell>
                    <TableCell>{f.type}</TableCell>
                    <TableCell>
                      <Badge className={`${status.className} border-0`}>{status.label}</Badge>
                    </TableCell>
                    <TableCell>{f.dueDate}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}