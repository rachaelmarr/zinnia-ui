import type { NotificationData } from "../../constants/accountData";
import { EMAIL_NOTIFICATION_SETTINGS, SMS_NOTIFICATION_SETTINGS } from "../../constants/accountData";

interface NotificationsTabProps {
  notificationData: NotificationData;
  setNotificationData: (data: NotificationData | ((prev: NotificationData) => NotificationData)) => void;
  loading: boolean;
  onSave: () => void;
}

export default function NotificationsTab({ 
  notificationData, 
  setNotificationData, 
  loading, 
  onSave 
}: NotificationsTabProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-[#47567B] mb-4">Email Notifications</h3>
        <div className="space-y-4">
          {EMAIL_NOTIFICATION_SETTINGS.map((item) => (
            <div key={item.key} className="flex items-center justify-between py-3">
              <div className="flex-1">
                <h4 className="font-medium text-[#47567B]">{item.label}</h4>
                <p className="text-sm text-[#667593]">{item.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notificationData[item.key]}
                  onChange={(e) => setNotificationData(prev => ({ ...prev, [item.key]: e.target.checked }))}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2f7685]"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#ccd7e6] pt-6">
        <h3 className="text-lg font-medium text-[#47567B] mb-4">SMS Notifications</h3>
        <div className="space-y-4">
          {SMS_NOTIFICATION_SETTINGS.map((item) => (
            <div key={item.key} className="flex items-center justify-between py-3">
              <div className="flex-1">
                <h4 className="font-medium text-[#47567B]">{item.label}</h4>
                <p className="text-sm text-[#667593]">{item.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notificationData[item.key]}
                  onChange={(e) => setNotificationData(prev => ({ ...prev, [item.key]: e.target.checked }))}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2f7685]"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#ccd7e6] pt-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-[#47567B]">Push Notifications</h4>
            <p className="text-sm text-[#667593]">Allow browser notifications for real-time updates</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notificationData.pushNotifications}
              onChange={(e) => setNotificationData(prev => ({ ...prev, pushNotifications: e.target.checked }))}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2f7685]"></div>
          </label>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onSave}
          disabled={loading}
          className="button-text bg-[#2f7685] hover:bg-[#265a66] text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save Preferences'}
        </button>
      </div>
    </div>
  );
}