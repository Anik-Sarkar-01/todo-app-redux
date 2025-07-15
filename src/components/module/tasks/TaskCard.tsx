import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import type { ITasks } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
    task: ITasks;
}

const TaskCard = ({ task }: IProps) => {
    const { title, description } = task;
    return (
        <div className="border p-5 mt-10 space-y-5 rounded-xl">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className={cn("w-3 h-3 rounded-full", {
                        "bg-green-400": task.priority === "Low",
                        "bg-yellow-400": task.priority === "Medium",
                        "bg-red-400": task.priority === "High",
                    }
                    )}></div>
                    <h2>{title}</h2>
                </div>
                <div className="flex items-center gap-2">
                    <Button className="bg-transparent">
                        <Trash2 className="text-red-400"></Trash2>
                    </Button>
                    <Checkbox></Checkbox>
                </div>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default TaskCard;