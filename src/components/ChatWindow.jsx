import { PaperAirplaneIcon, PaperClipIcon, FaceSmileIcon } from '@heroicons/react/24/outline';

function ChatWindow() {
  return (
    <div className="w-[calc(100%-784px)] flex flex-col bg-white h-screen">
      {/* Fixed Header */}
      <div className="flex-shrink-0 px-6 py-4 border-b bg-white">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img 
              src="https://ui-avatars.com/api/?name=Himanshu+Raj&background=random" 
              alt="Chat Avatar"
              className="w-10 h-10 rounded-full"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <div>
            <h2 className="font-semibold">Himanshu Raj</h2>
            <p className="text-sm text-gray-500">Online</p>
          </div>
        </div>
      </div>

      {/* Scrollable Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50">
        {/* Received Message */}
        <div className="flex items-start gap-3 max-w-[80%]">
          <img 
            src="https://ui-avatars.com/api/?name=Himanshu+Raj&background=random" 
            alt="Sender Avatar"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm">
              <p className="text-sm">Hey there! I keep getting error while creating a new pop up for the first time setup...</p>
            </div>
            <span className="text-xs text-gray-500 mt-1">12:30 PM</span>
          </div>
        </div>

        {/* Sent Message */}
        <div className="flex items-start justify-end gap-3 max-w-[80%] ml-auto">
          <div className="text-right">
            <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none shadow-sm">
              <p className="text-sm">Hi! Let me help you with that. Could you please share the error message you're seeing?</p>
            </div>
            <span className="text-xs text-gray-500 mt-1">12:32 PM</span>
          </div>
        </div>
      </div>

      {/* Fixed Input Area */}
      <div className="flex-shrink-0 px-6 py-4 border-t bg-white">
        <div className="flex items-center gap-3">
          <button className="text-gray-400 hover:text-gray-600">
            <PaperClipIcon className="w-6 h-6" />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full py-2 px-4 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <FaceSmileIcon className="w-6 h-6" />
            </button>
          </div>
          <button className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700">
            <PaperAirplaneIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;