import { render, fireEvent, screen } from "@testing-library/react";
import TaskFilters from "../ui/TaskFilters";
import { RootStoreContext } from "shared/context";
import RootStore from "shared/store/rootStore";
import taskStore from "shared/store/taskStore";

describe("TaskFilters Component", () => {
  it("рендер компонента", () => {
    render(
      <RootStoreContext.Provider value={new RootStore()}>
        <TaskFilters total={5} />
      </RootStoreContext.Provider>
    );
    expect(screen.getByText("total 5")).toBeInTheDocument();
  });

  it("вызов функции'changeFilterType' при клике на кнопку 'Active'", async () => {
    render(
      <RootStoreContext.Provider value={new RootStore()}>
        <TaskFilters total={5} />
      </RootStoreContext.Provider>
    );
    const allButton = screen.getByText("Active");

    fireEvent.click(allButton);

    expect(taskStore.filterType).toBe("active");
  });
  it("вызов функции'changeFilterType' при клике на кнопку 'All'", async () => {
    render(
      <RootStoreContext.Provider value={new RootStore()}>
        <TaskFilters total={5} />
      </RootStoreContext.Provider>
    );
    const allButton = screen.getByText("All");

    fireEvent.click(allButton);

    expect(taskStore.filterType).toBe("all");
  });
  it("вызов функции'changeFilterType' при клике на кнопку 'Completed'", async () => {
    render(
      <RootStoreContext.Provider value={new RootStore()}>
        <TaskFilters total={5} />
      </RootStoreContext.Provider>
    );
    const allButton = screen.getByText("Completed");

    fireEvent.click(allButton);

    expect(taskStore.filterType).toBe("completed");
  });
});
