import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen p-1 sm:p-4">
      <div className="flex h-full sm:h-[95vh] w-full max-w-7xl rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 shadow-lg">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
