import { FC } from "react";
import { observer } from "mobx-react-lite";

import { ITaskFiltersProps } from "../../types/taskFilters.interface";

import { useStores } from "shared/context";

import styles from "./styles.module.sass";

import { Button } from "shared/ui/Button";

const TaskFilters: FC<ITaskFiltersProps> = ({ total }) => {
  const { task } = useStores();

  const selectAll = () => {
    task.changeFilterType("all");
  };
  const selectActive = () => {
    task.changeFilterType("active");
  };
  const selectCompleted = () => {
    task.changeFilterType("completed");
  };

  const clearCompleted = () => {
    task.clearCompleted();
  };

  return (
    <div className={styles.taskFilters}>
      <div className={styles.filtersTotal}>total {total}</div>
      <div className={styles.filtersBtns}>
        <Button
          isActive={task.filterType === "all"}
          onClick={selectAll}
          variable="outline"
        >
          All
        </Button>
        <Button
          isActive={task.filterType === "active"}
          onClick={selectActive}
          variable="outline"
        >
          Active
        </Button>
        <Button
          isActive={task.filterType === "completed"}
          onClick={selectCompleted}
          variable="outline"
        >
          Completed
        </Button>
      </div>
      <div className={styles.clear}>
        <Button onClick={clearCompleted} variable="fill">
          Clear completed
        </Button>
      </div>
    </div>
  );
};

export default observer(TaskFilters);
