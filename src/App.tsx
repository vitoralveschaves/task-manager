import Sidebar from "./components/sidebar";
import Tasks from "./components/tasks";

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Tasks />
    </div>
  );
};

export default App;
