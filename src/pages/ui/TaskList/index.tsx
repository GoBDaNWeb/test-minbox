import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import { ITask } from "shared/types/task.interface";

import { useStores } from "shared/context";

import styles from "./styles.module.sass";

import AddTaskField from "../AddTaskField";
import TaskCard from "../TaskCard";
import TaskFilters from "../TaskFilters";

const TaskList = () => {
  const { task } = useStores();

  const [taskList, setTaskList] = useState<ITask[]>(task.taskList);

  useEffect(() => {
    setTaskList(task.taskList);
  }, [task.taskList]);

  useEffect(() => {
    if (task.filterType === "all") {
      const filteredTask = task.taskList.filter((task) => {
        return task;
      });
      setTaskList(filteredTask);
    } else if (task.filterType === "active") {
      const filteredTask = task.taskList.filter((task) => {
        return task.completed === false;
      });
      setTaskList(filteredTask);
    } else if (task.filterType === "completed") {
      const filteredTask = task.taskList.filter((task) => {
        return task.completed === true;
      });
      setTaskList(filteredTask);
    }
  }, [task.filterType, task.taskList]);

  return (
    <div className={styles.taskList}>
      <div className={styles.taskListContent}>
        <h1>Todo List</h1>
        <AddTaskField />
        <div>
          {taskList.length > 0 ? (
            <>
              {taskList.map((taskItem) => (
                <TaskCard key={taskItem.id} taskItem={taskItem} />
              ))}
            </>
          ) : (
            <p className={styles.emptyList}>there are no tasks yet</p>
          )}
        </div>

        <TaskFilters total={taskList.length} />
      </div>
    </div>
  );
};

export default observer(TaskList);
