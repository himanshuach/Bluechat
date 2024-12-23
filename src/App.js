import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar />
      <ChatWindow />
      <UserProfile />
    </div>
  );
}

export default App;