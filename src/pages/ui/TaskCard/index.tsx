import { FC } from "react";
import { observer } from "mobx-react-lite";

import { ITaskCardProps } from "../../types/taskCard.interface";

import { useStores } from "shared/context";

import styles from "./styles.module.sass";

const TaskCard: FC<ITaskCardProps> = ({ taskItem, handleFilterTaskList }) => {
  const { id, text } = taskItem;

  const { task } = useStores();

  const handleChangeCompleted = () => {
    task.toggleCompleted(id);
    handleFilterTaskList();
    localStorage.setItem("taskList", JSON.stringify(task.taskList));
  };

  return (
    <label className={styles.taskCard}>
      <input
        onChange={handleChangeCompleted}
        defaultChecked={taskItem.completed}
        type="checkbox"
      />
      {text}
    </label>
  );
};

export default observer(TaskCard);
