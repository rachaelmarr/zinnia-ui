import type { SecurityData } from "../../constants/accountData";

interface SecurityTabProps {
  securityData: SecurityData;
  setSecurityData: (data: SecurityData | ((prev: SecurityData) => SecurityData)) => void;
  loading: boolean;
  onChangePassword: () => void;
}

export default function SecurityTab({ securityData, setSecurityData, loading, onChangePassword }: SecurityTabProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-[#47567B] mb-4">Change Password</h3>
        <div className="max-w-md space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#47567B] mb-2">
              Current Password
            </label>
            <input
              type="password"
              value={securityData.currentPassword}
              onChange={(e) => setSecurityData(prev => ({ ...prev, currentPassword: e.target.value }))}
              className="w-full h-10 px-3 py-2 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#47567B] mb-2">
              New Password
            </label>
            <input
              type="password"
              value={securityData.newPassword}
              onChange={(e) => setSecurityData(prev => ({ ...prev, newPassword: e.target.value }))}
              className="w-full h-10 px-3 py-2 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#47567B] mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              value={securityData.confirmPassword}
              onChange={(e) => setSecurityData(prev => ({ ...prev, confirmPassword: e.target.value }))}
              className="w-full h-10 px-3 py-2 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
            />
          </div>

          <button
            onClick={onChangePassword}
            disabled={loading || !securityData.currentPassword || !securityData.newPassword || !securityData.confirmPassword}
            className="button-text bg-[#2f7685] hover:bg-[#265a66] text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? 'Changing...' : 'Change Password'}
          </button>
        </div>
      </div>

      <div className="border-t border-[#ccd7e6] pt-6">
        <h3 className="text-lg font-medium text-[#47567B] mb-4">Two-Factor Authentication</h3>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-[#47567B]">SMS Authentication</h4>
              <p className="text-sm text-[#667593]">Secure your account with SMS verification</p>
            </div>
            <button className="button-text bg-[#2f7685] hover:bg-[#265a66] text-white px-4 py-2 rounded-lg transition-colors">
              Enable
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}