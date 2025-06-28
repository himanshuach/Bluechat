import { PlusIcon, BellIcon, CalendarIcon, UserIcon, MagnifyingGlassIcon, 
         PhoneIcon, VideoCameraIcon, EllipsisHorizontalIcon, MapPinIcon, CameraIcon,
         CurrencyDollarIcon, EyeIcon, EnvelopeIcon, ClockIcon, TagIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

function UserProfile() {
  return (
    <div className="w-80 lg:w-96 border-l border-gray-200 bg-white h-screen flex flex-col">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Profile Header */}
          <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
            <div className="relative w-24 h-24 mx-auto mb-4 group">
              <img 
                src="https://ui-avatars.com/api/?name=Oğuz+Yağız+Kara&size=128&background=random" 
                alt="Profile"
                className="w-full h-full rounded-full border-4 border-white shadow-sm"
              />
              <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                <input type="file" className="hidden" accept="image/*" />
                <CameraIcon className="w-8 h-8 text-white" />
              </label>
              <label className="absolute bottom-0 right-0 p-1 bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700 transition-colors border-2 border-white">
                <input type="file" className="hidden" accept="image/*" />
                <PlusIcon className="w-4 h-4 text-white" />
              </label>
            </div>
            <h2 className="text-xl font-semibold">Himanshu Raj</h2>
            <div className="flex items-center justify-center gap-1 text-sm text-gray-500 mt-1">
              <MapPinIcon className="w-4 h-4" />
              <span>12:00 am in Istanbul, Turkey</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center px-4">
            <button className="flex flex-col items-center gap-1">
              <PhoneIcon className="w-5 h-5 text-gray-500" />
              <span className="text-xs text-gray-500">Call</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <VideoCameraIcon className="w-5 h-5 text-gray-500" />
              <span className="text-xs text-gray-500">Video</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <EllipsisHorizontalIcon className="w-5 h-5 text-gray-500" />
              <span className="text-xs text-gray-500">More</span>
            </button>
          </div>

          {/* Stats Cards */}
          <div className="flex gap-4">
            {/* Revenue Card */}
            <div className="flex-1 bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <CurrencyDollarIcon className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-500">Revenue</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-semibold">$3,452</span>
                <span className="text-xs text-gray-500">3 Orders</span>
              </div>
            </div>
            {/* Web Visits Card */}
            <div className="flex-1 bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <EyeIcon className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-500">Web Visits</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-semibold">42</span>
                <span className="text-xs text-gray-500">4 Link Clicks</span>
              </div>
            </div>
          </div>
           {/* Icon Tabs */}
          <div className="p-3 flex justify-between items-center bg-gray-50 rounded-xl">
            <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
              <UserIcon className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
              <BellIcon className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
              <CalendarIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="px-4">
            <div className="relative">
              <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search in general..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg text-sm"
              />
            </div>
          </div>
           {/* Information Section */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium">Information</h3>
              <button className="text-blue-600 hover:bg-blue-50 p-1 rounded">
                <PlusIcon className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TagIcon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Segment</span>
                </div>
                <span className="text-sm">Abandoned Cart</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <EnvelopeIcon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Email</span>
                </div>
                <span className="text-sm">himanshuach.842@gmail.com</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <PhoneIcon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Phone</span>
                </div>
                <span className="text-sm">+91 7634814232</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Last Visited</span>
                </div>
                <span className="text-sm">22 dec, 2024</span>
              </div>
            </div>
           <button className="w-full mt-3 py-1.5 text-sm text-gray-500 hover:bg-gray-50 rounded-lg flex items-center justify-center gap-1">
             <span>Show more</span>
             <ChevronDownIcon className="w-4 h-4" />
           </button>
          </div>
           {/* Tags Section */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium">Tags</h3>
              <button className="text-blue-600 text-sm">Add</button>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm">
                Abandoned Cart User
                <button className="ml-1 text-gray-400 hover:text-gray-600">×</button>
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm">
                Popup
                <button className="ml-1 text-gray-400 hover:text-gray-600">×</button>
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm">
                Successful
                <button className="ml-1 text-gray-400 hover:text-gray-600">×</button>
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm">
                Shop Error
                <button className="ml-1 text-gray-400 hover:text-gray-600">×</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;