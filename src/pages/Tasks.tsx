import TaskCard from "@/components/module/tasks/taskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";

const Tasks = () => {
    const tasks = useAppSelector(selectTasks);

    return (
        <div>
            {tasks.map(task =>
                <TaskCard key={task.id} task={task}></TaskCard>
            )}
        </div>
    );
};

export default Tasks;