import type { BusinessData } from "../../constants/accountData";
import { BUSINESS_TYPE_OPTIONS } from "../../constants/accountData";

interface BusinessTabProps {
  businessData: BusinessData;
  setBusinessData: (data: BusinessData | ((prev: BusinessData) => BusinessData)) => void;
  loading: boolean;
  onSave: () => void;
}

export default function BusinessTab({ businessData, setBusinessData, loading, onSave }: BusinessTabProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-[#47567B] mb-4">Business Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#47567B] mb-2">
              Business Name
            </label>
            <input
              type="text"
              value={businessData.businessName}
              onChange={(e) => setBusinessData(prev => ({ ...prev, businessName: e.target.value }))}
              className="w-full h-10 px-3 py-2 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#47567B] mb-2">
              Business Type
            </label>
            <select
              value={businessData.businessType}
              onChange={(e) => setBusinessData(prev => ({ ...prev, businessType: e.target.value }))}
              className="w-full h-10 px-3 py-2 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
            >
              {BUSINESS_TYPE_OPTIONS.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-[#47567B] mb-2">
              Business Address
            </label>
            <input
              type="text"
              value={businessData.address}
              onChange={(e) => setBusinessData(prev => ({ ...prev, address: e.target.value }))}
              className="w-full h-10 px-3 py-2 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#47567B] mb-2">
              City
            </label>
            <input
              type="text"
              value={businessData.city}
              onChange={(e) => setBusinessData(prev => ({ ...prev, city: e.target.value }))}
              className="w-full h-10 px-3 py-2 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#47567B] mb-2">
              State
            </label>
            <input
              type="text"
              value={businessData.state}
              onChange={(e) => setBusinessData(prev => ({ ...prev, state: e.target.value }))}
              className="w-full h-10 px-3 py-2 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#47567B] mb-2">
              ZIP Code
            </label>
            <input
              type="text"
              value={businessData.zipCode}
              onChange={(e) => setBusinessData(prev => ({ ...prev, zipCode: e.target.value }))}
              className="w-full h-10 px-3 py-2 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#47567B] mb-2">
              Business Phone
            </label>
            <input
              type="tel"
              value={businessData.businessPhone}
              onChange={(e) => setBusinessData(prev => ({ ...prev, businessPhone: e.target.value }))}
              className="w-full h-10 px-3 py-2 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-[#47567B] mb-2">
              Tax ID (Optional)
            </label>
            <input
              type="text"
              value={businessData.taxId}
              onChange={(e) => setBusinessData(prev => ({ ...prev, taxId: e.target.value }))}
              className="w-full h-10 px-3 py-2 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
              placeholder="Federal Tax ID or EIN"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onSave}
          disabled={loading}
          className="button-text bg-[#2f7685] hover:bg-[#265a66] text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
}