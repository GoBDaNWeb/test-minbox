import { render, screen } from "@testing-library/react";
import TaskList from "../ui/TaskList";
import { RootStoreContext } from "shared/context";
import RootStore from "shared/store/rootStore";
import taskStore from "shared/store/taskStore";

describe("TaskList Component", () => {
  it("рендер компонента с тайтлом 'Todo List'", () => {
    render(
      <RootStoreContext.Provider value={new RootStore()}>
        <TaskList />
      </RootStoreContext.Provider>
    );
    expect(screen.getByText("Todo List")).toBeInTheDocument();
  });

  it("рендер при отсутствии тасок", () => {
    render(
      <RootStoreContext.Provider value={new RootStore()}>
        <TaskList />
      </RootStoreContext.Provider>
    );
    expect(screen.getByText("there are no tasks yet")).toBeInTheDocument();
  });

  it("рендер компонента с тасками", () => {
    taskStore.addTask({
      id: "1",
      text: "task 1",
      completed: false,
    });
    taskStore.addTask({
      id: "2",
      text: "task 2",
      completed: false,
    });
    render(
      <RootStoreContext.Provider value={new RootStore()}>
        <TaskList />
      </RootStoreContext.Provider>
    );

    const taskCard1 = screen.getByText("task 1");
    const taskCard2 = screen.getByText("task 2");

    expect(taskCard1).toBeInTheDocument();
    expect(taskCard2).toBeInTheDocument();
  });
});
