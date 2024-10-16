import { Plus } from "lucide-react";
import { Button } from "../../components/ui/button";
import { KanbanCard } from "../components/kanban-card";

export function Dashboard() {
  return (
    <div className="font-nauman-regular bg-red-200 h-full flex flex-col gap-2">
      <div className="bg-slate-500">
        <Button className="flex items-center gap-2">
          Add a new card
          <Plus size={18} />
        </Button>
      </div>
      <div className="bg-green-400 h-dvh w-full grid grid-cols-4 gap-6">
        <div className=" bg-yellow-200 flex flex-col gap-4">
          <KanbanCard />
          <KanbanCard />
          <KanbanCard />
        </div>
        <div className=" bg-orange-400 flex flex-col gap-4">
          <KanbanCard />
          <KanbanCard />
          <KanbanCard />
        </div>
        <div className=" bg-violet-400 flex flex-col gap-4">
          <KanbanCard />
          <KanbanCard />
          <KanbanCard />
        </div>
        <div className=" bg-blue-200 flex flex-col gap-4">
          <KanbanCard />
          <KanbanCard />
          <KanbanCard />
        </div>
      </div>
    </div>
  );
}
