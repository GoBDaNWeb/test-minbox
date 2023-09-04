import taskStore from "../taskStore";

describe("Task Store", () => {
  it("использование функции addTask", () => {
    expect(taskStore.taskList.length).toBe(0);

    taskStore.addTask({
      id: "1",
      text: "text",
      completed: false,
    });

    expect(taskStore.taskList).not.toBeUndefined();
    expect(taskStore.taskList).not.toBeNull();
    expect(taskStore.taskList.length).toBeGreaterThan(0);
  });
  it("использование функции changeFilterType с пропсом active", () => {
    expect(taskStore.filterType).toBe("all");

    taskStore.changeFilterType("active");

    expect(taskStore.filterType).toBe("active");
  });
  it("использование функции changeFilterType с пропсом completed", () => {
    expect(taskStore.filterType).toBe("active");

    taskStore.changeFilterType("completed");

    expect(taskStore.filterType).toBe("completed");
  });
  it("использование функции changeFilterType с пропсом all", () => {
    expect(taskStore.filterType).toBe("completed");

    taskStore.changeFilterType("all");

    expect(taskStore.filterType).toBe("all");
  });
  it("использование функции completed", () => {
    expect(taskStore.taskList[0].completed).toBe(false);

    taskStore.toggleCompleted("1");

    expect(taskStore.taskList[0].completed).toBe(true);

    taskStore.toggleCompleted("1");

    expect(taskStore.taskList[0].completed).toBe(false);
  });
});
