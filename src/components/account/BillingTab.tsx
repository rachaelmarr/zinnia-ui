import { BILLING_HISTORY } from "../../constants/accountData";

export default function BillingTab() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-[#47567B] mb-4">Subscription</h3>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-lg font-medium text-[#47567B]">Professional Plan</h4>
              <p className="text-[#667593]">Full access to all vendor features</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-semibold text-[#47567B]">$29</div>
              <div className="text-sm text-[#667593]">per month</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#667593] mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Active • Next billing: March 15, 2025</span>
          </div>
          <div className="flex gap-3">
            <button className="button-text border border-[#8c97ac] text-[#667593] hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors">
              Change Plan
            </button>
            <button className="button-text border border-red-300 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors">
              Cancel Subscription
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-[#47567B] mb-4">Payment Method</h3>
        <div className="bg-white border border-[#ccd7e6] rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                VISA
              </div>
              <div>
                <p className="font-medium text-[#47567B]">•••• •••• •••• 4242</p>
                <p className="text-sm text-[#667593]">Expires 12/26</p>
              </div>
            </div>
            <button className="button-text border border-[#8c97ac] text-[#667593] hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors">
              Update
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-[#47567B] mb-4">Billing History</h3>
        <div className="bg-white border border-[#ccd7e6] rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-[#47567B]">Date</th>
                <th className="text-left py-3 px-4 font-medium text-[#47567B]">Description</th>
                <th className="text-left py-3 px-4 font-medium text-[#47567B]">Amount</th>
                <th className="text-left py-3 px-4 font-medium text-[#47567B]">Status</th>
                <th className="text-left py-3 px-4 font-medium text-[#47567B]">Invoice</th>
              </tr>
            </thead>
            <tbody>
              {BILLING_HISTORY.map((item, index) => (
                <tr key={index} className="border-t border-[#ccd7e6]">
                  <td className="py-3 px-4 text-[#47567B]">{item.date}</td>
                  <td className="py-3 px-4 text-[#47567B]">{item.description}</td>
                  <td className="py-3 px-4 text-[#47567B]">{item.amount}</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-[#2f7685] hover:text-[#265a66] text-sm">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}