import svgPaths from "./svg-0rgfwu892t";

function Warning() {
  return (
    <div className="relative shrink-0 size-5" data-name="warning">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="warning">
          <path d={svgPaths.pdc79980} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame12038() {
  return (
    <div className="bg-[#f8c964] box-border flex items-center justify-center p-2 rounded-full shrink-0 w-9 h-9">
      <Warning />
    </div>
  );
}

function Chat() {
  return (
    <div className="relative shrink-0 size-5" data-name="chat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chat">
          <path d={svgPaths.pac89d00} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame12039() {
  return (
    <div className="bg-[#ccd7e6] box-border flex items-center justify-center p-2 rounded-full shrink-0 w-9 h-9">
      <Chat />
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-5" data-name="mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="mail">
          <path d={svgPaths.p80d7900} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame12040() {
  return (
    <div className="bg-[#ccd7e6] box-border flex items-center justify-center p-2 rounded-full shrink-0 w-9 h-9">
      <Mail />
    </div>
  );
}

function PencilAlt() {
  return (
    <div className="relative shrink-0 size-5" data-name="pencil-alt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="pencil-alt">
          <path d={svgPaths.p27607500} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame12041() {
  return (
    <div className="bg-[#ffcdb2] box-border flex items-center justify-center p-2 rounded-full shrink-0 w-9 h-9">
      <PencilAlt />
    </div>
  );
}

function CurrencyDollar() {
  return (
    <div className="relative shrink-0 size-5" data-name="currency-dollar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="currency-dollar">
          <path d={svgPaths.p12005030} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame12042() {
  return (
    <div className="bg-[#d5f8a8] box-border flex items-center justify-center p-2 rounded-full shrink-0 w-9 h-9">
      <CurrencyDollar />
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-5" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="calendar">
          <path d={svgPaths.p111ed900} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame12043() {
  return (
    <div className="bg-[#c7f8eb] box-border flex items-center justify-center p-2 rounded-full shrink-0 w-9 h-9">
      <Calendar />
    </div>
  );
}

function ClipboardCheck() {
  return (
    <div className="relative shrink-0 size-5" data-name="clipboard-check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="clipboard-check">
          <path d={svgPaths.p1f70dd00} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame12044() {
  return (
    <div className="bg-neutral-300 box-border flex items-center justify-center p-2 rounded-full shrink-0 w-9 h-9">
      <ClipboardCheck />
    </div>
  );
}

// Reusable Activity Card Component
interface ActivityCardProps {
  icon: React.ReactNode;
  title: string;
  timestamp: string;
  description?: string;
}

function ActivityCard({ icon, title, timestamp, description }: ActivityCardProps) {
  return (
    <div className="bg-white relative rounded-lg border border-[#ccd7e6] p-4">
      <div className="flex items-start gap-4">
        {/* Icon */}
        {icon}
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Title and Timestamp */}
          <div className="flex items-start justify-between gap-4 mb-1">
            <div className="font-['Literata:Medium',_sans-serif] font-medium text-[16px] tracking-[0.32px] text-[#47567b] flex-1">
              {title}
            </div>
            <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[12px] tracking-[0.24px] text-[#47567b] whitespace-nowrap">
              {timestamp}
            </div>
          </div>
          
          {/* Description */}
          {description && (
            <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[14px] tracking-[0.28px] text-[#47567b] leading-[1.5]">
              {description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Frame12034() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <ActivityCard 
        icon={<Frame12038 />}
        title="Payment overdue"
        timestamp="March 10, 2025 12:35 PM"
        description="Final invoice overdue -- reminder sent."
      />
      
      <ActivityCard 
        icon={<Frame12039 />}
        title="SMS Sent"
        timestamp="March 5, 2025 12:35 PM"
        description="Final invoice overdue -- reminder sent."
      />
      
      <ActivityCard 
        icon={<Frame12040 />}
        title="Bulk email sent"
        timestamp="March 1, 2025 12:35 PM"
        description="Sent "Final Details Reminder" to all booked clients."
      />
      
      <ActivityCard 
        icon={<Frame12041 />}
        title="Internal Note Added"
        timestamp="Feb 20, 2025 12:35 PM"
        description="Client prefers blush and gold color theme."
      />
      
      <ActivityCard 
        icon={<Frame12042 />}
        title="Payment received"
        timestamp="Feb 13, 2025 12:35 PM"
        description="Deposit of $1,000 received via Stripe."
      />
      
      <ActivityCard 
        icon={<Frame12043 />}
        title="Meeting completed"
        timestamp="Feb 10, 2025 12:35 PM"
        description="Venue tour completed. Sarah loved the ballroom!"
      />
      
      <ActivityCard 
        icon={<Frame12044 />}
        title="Contract signed"
        timestamp="Feb 10, 2025 12:35 PM"
        description="Sarah & James signed the agreement."
      />
    </div>
  );
}