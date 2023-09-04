import { FC } from "react";
import { RootStoreContext } from "shared/context";
import RootStore from "shared/store/rootStore";

export const withStore = <T extends Record<string, unknown>>(
  Component: FC<T>
) => {
  return function WithStoreComponent(props: T) {
    return (
      <RootStoreContext.Provider value={new RootStore()}>
        <Component {...props} />
      </RootStoreContext.Provider>
    );
  };
};
