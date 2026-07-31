import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const STATUS_CONFIG = {
  not_started:         { label: "Non commencée", className: "bg-[#f3e8ff] text-[#64748b]" },
  in_progress:         { label: "En cours", className: "bg-[#fef3c7] text-[#f59e0b]" },
  awaiting_final_test: { label: "En attente du test", className: "bg-[#fef3c7] text-[#f59e0b]" },
  awaiting_ssi:        { label: "En attente SSI", className: "bg-[#fef3c7] text-[#f59e0b]" },
  validated:           { label: "Validée", className: "bg-[#d1fae5] text-[#10b981]" },
  failed:              { label: "Échouée", className: "bg-[#fee2e2] text-[#ef4444]" },
}

export default function FormationsTable({ formations = [] }) {
  return (
    <Card className="rounded-sm bg-card shadow-lg min-w-0">
      <CardContent className="p-6">
        <p className="text-primary mb-4 text-lg font-semibold">Mes formations</p>
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