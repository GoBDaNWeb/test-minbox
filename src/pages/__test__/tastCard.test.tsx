import { render, fireEvent, screen } from "@testing-library/react";
import TaskCard from "../ui/TaskCard";
import { RootStoreContext } from "shared/context";
import RootStore from "shared/store/rootStore";
import taskStore from "shared/store/taskStore";

describe("TaskCard Component", () => {
  const taskItem = {
    id: "1",
    text: "Task 1",
    completed: false,
  };
  localStorage.setItem("taskList", JSON.stringify([taskItem]));

  taskStore.addTask(taskItem);

  it("рендер компонента с текстом", () => {
    render(
      <RootStoreContext.Provider value={new RootStore()}>
        <TaskCard taskItem={taskItem} />
      </RootStoreContext.Provider>
    );
    expect(screen.getByText("Task 1")).toBeInTheDocument();
  });

  it("рендер компонента с правильным отображением defaultChecked", () => {
    render(
      <RootStoreContext.Provider value={new RootStore()}>
        <TaskCard taskItem={taskItem} />
      </RootStoreContext.Provider>
    );
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it("обновление localStorage когда вызывается 'toggleCompleted'", () => {
    render(
      <RootStoreContext.Provider value={new RootStore()}>
        <TaskCard taskItem={taskItem} />
      </RootStoreContext.Provider>
    );
    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);

    const storedTaskList = JSON.parse(localStorage.getItem("taskList") || "[]");

    expect(storedTaskList[0].completed).toBe(true);
  });
});
