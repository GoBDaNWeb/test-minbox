import { observer } from "mobx-react-lite";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { ITask } from "shared/types/task.interface";

import styles from "./styles.module.sass";

import { randomId } from "shared/helpers";
import { useStores } from "shared/context";
import { Input } from "shared/ui/Input";
import { Button } from "shared/ui/Button";

const AddTaskField = () => {
  const { register, handleSubmit, resetField } = useForm<FieldValues>({
    defaultValues: {
      taskText: "",
    },
  });

  const { task } = useStores();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const taskItem: ITask = {
      id: randomId(15),
      text: data.taskText,
      completed: false,
    };

    task.addTask(taskItem);
    localStorage.setItem("taskList", JSON.stringify(task.taskList));

    resetField("taskText");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.addTask}>
      <Input
        id="taskText"
        register={register}
        required
        placeholder="What need to be done?"
      />
      <Button variable="fill" type="submit">
        Add task
      </Button>
    </form>
  );
};

export default observer(AddTaskField);
