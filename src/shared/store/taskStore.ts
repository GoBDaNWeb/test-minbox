import { makeAutoObservable } from "mobx";
import { ITask } from "../types/task.interface";

const taskList =
  typeof window !== "undefined" ? localStorage.getItem("taskList") : null;

class TaskStore {
  taskList: ITask[] = taskList ? JSON.parse(taskList) : [];

  filterType: "all" | "active" | "completed" = "all";

  constructor() {
    makeAutoObservable(this);
  }

  addTask(task: ITask) {
    this.taskList = [...this.taskList, task];
  }

  changeFilterType(type: "all" | "active" | "completed") {
    this.filterType = type;
  }

  toggleCompleted(id: string) {
    const currentIndex = this.taskList.findIndex(
      (task: ITask) => task.id === id
    );

    this.taskList[currentIndex].completed =
      !this.taskList[currentIndex].completed;
  }

  clearCompleted() {
    this.taskList = this.taskList.filter((task) => {
      return task.completed === false;
    });
  }
}

const taskStore = new TaskStore();

export default taskStore;
