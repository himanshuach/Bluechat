import { useState } from 'react';
import { ChevronDownIcon, FunnelIcon, ClockIcon, ChatBubbleLeftIcon, UsersIcon } from '@heroicons/react/24/outline';

function Sidebar() {
  const [activeTab, setActiveTab] = useState('messages');

  return (
    <div className="w-80 lg:w-96 border-r border-gray-200 flex flex-col bg-white h-screen">
      {/* Fixed Header */}
      <div className="flex-shrink-0">
        {/* Header */}
        <div className="px-4 py-3 border-b">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
            <span className="font-semibold">BlueChat</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b bg-gray-50">
          <button 
            onClick={() => setActiveTab('messages')}
            className="flex-1 py-3 relative group"
          >
            <div className="flex items-center justify-center gap-2">
              <ChatBubbleLeftIcon className="w-4 h-4" />
              <span className={`text-sm font-medium ${activeTab === 'messages' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
                Messages
              </span>
              <span className={`text-xs px-1.5 rounded ${activeTab === 'messages' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>4</span>
            </div>
            {activeTab === 'messages' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
            )}
          </button>
          <button 
            onClick={() => setActiveTab('segments')}
            className="flex-1 py-3 relative group"
          >
            <div className="flex items-center justify-center gap-2">
              <UsersIcon className="w-4 h-4" />
              <span className={`text-sm font-medium ${activeTab === 'segments' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
                Segments
              </span>
              <span className={`text-xs px-1.5 rounded ${activeTab === 'segments' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>3</span>
            </div>
            {activeTab === 'segments' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
            )}
          </button>
        </div>

        {/* Filter - Only show for Messages tab */}
        {activeTab === 'messages' && (
          <div className="flex border-b">
            <div className="flex-1 py-2 px-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FunnelIcon className="w-4 h-4 text-gray-500" />
                <span className="flex items-center gap-1">All</span>
                <span className="text-xs bg-gray-100 px-1.5 rounded">4</span>
                <ChevronDownIcon className="w-4 h-4 text-gray-500" />
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4 text-gray-500" />
                <span>Oldest</span>
                <ChevronDownIcon className="w-4 h-4 text-gray-500" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'messages' ? (
          <>
            <ChatItem 
              name="Himanshu Raj"
              message="I keep getting error while creating a new pop up for the first time setup..."
              time="+ 5m"
              isActive={true}
            />
            <ChatItem 
              name="George Klein"
              message="Wow, this is really epic man! Thank..."
              time="1h 54m"
              hasMessenger={true}
            />
            <ChatItem 
              name="847-401-1946"
              message="Haha oh man, this is amazing!"
              time="4h 21m"
              isWhatsApp={true}
            />
            <ChatItem 
              name="Ergat Bagbag"
              message="There will be changes to next week's presentation due to the recent poll..."
              time="4h 21m"
              isInstagram={true}
            />
          </>
        ) : (
          <div className="p-4 space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-100 hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Abandoned Cart Users</h3>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">124 users</span>
              </div>
              <p className="text-sm text-gray-500">Users who added items to cart but didn't complete purchase</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-100 hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">First Time Visitors</h3>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">89 users</span>
              </div>
              <p className="text-sm text-gray-500">Users visiting the website for the first time</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-100 hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Regular Customers</h3>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">19 users</span>
              </div>
              <p className="text-sm text-gray-500">Users who made more than 3 purchases</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ChatItem({ name, message, time, isActive, hasMessenger, isWhatsApp, isInstagram }) {
  return (
    <div className={`flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer ${isActive ? 'bg-blue-50' : ''}`}>
      <div className="relative">
        <img 
          src={`https://ui-avatars.com/api/?name=${name}&background=random`} 
          alt={name}
          className="w-10 h-10 rounded-full"
        />
        {hasMessenger && (
          <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
            <ChatBubbleLeftIcon className="w-3 h-3 text-white" />
          </div>
        )}
        {isWhatsApp && (
          <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
            <span className="text-white text-xs">W</span>
          </div>
        )}
        {isInstagram && (
          <div className="absolute -bottom-1 -right-1 bg-pink-500 rounded-full p-1">
            <span className="text-white text-xs">I</span>
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <p className="font-medium truncate text-sm">{name}</p>
          <span className="text-xs text-gray-500 whitespace-nowrap">{time}</span>
        </div>
        <p className="text-sm text-gray-500 truncate">{message}</p>
      </div>
      <div className="flex-shrink-0">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
      </div>
    </div>
  );
}

export default Sidebar; 