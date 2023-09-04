import { withStore } from "./providers";

import "./index.sass";

import { TaskList } from "pages";

const App = () => {
  return <TaskList />;
};

export default withStore(App);
