import { ITask } from "shared/types/task.interface";

export interface ITaskCardProps {
  taskItem: ITask;
  handleFilterTaskList: () => void;
}
