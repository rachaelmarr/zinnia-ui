import { useState, useRef, useEffect } from "react";
import desktopSvgPaths from "../imports/svg-y93zotu5pg";
import svgPaths from "../imports/svg-qfq07qodim";
import paymentsSvgPaths from "../imports/svg-tzzzqf1z1c";
import CreateInvoice from "./CreateInvoice";
import { INVOICE_TEMPLATES, SAMPLE_INVOICES } from "../constants/invoiceData";
import { supabaseAnonKey, supabaseFunctionsBaseUrl } from "../config/env";
import Calendar from "../imports/Calendar-126-4615";

interface InvoiceProps {
  onNavigate?: (view: string) => void;
  hasCompletedListing?: boolean;
  hasVisitedCalendar?: boolean;
  currentView?: string;
}



// Header Icons
function ChatAlt2() {
  return (
    <div className="relative shrink-0 size-6" data-name="chat-alt-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chat-alt-2">
          <path
            d="M4 6H16V16H8L4 20V6Z"
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-6" data-name="bell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="bell">
          <path
            d="M18 8A6 6 0 0 0 6 8C6 15 3 17 3 17H21S18 15 18 8ZM13.73 21A2 2 0 0 1 10.27 21"
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}


// Invoice Components from Figma
function SearchIcon() {
  return (
    <div className="relative shrink-0 size-5" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="search">
          <path d={svgPaths.p99f0820} id="Vector" stroke="var(--stroke-0, #667593)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function InvoiceSearchBar() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full max-w-[200px] md:max-w-[280px]">
      <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full">
        <div className="flex flex-row items-center overflow-clip relative size-full">
          <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
            <SearchIcon />
            <div className="basis-0 content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px relative shrink-0">
              <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
                <p className="leading-[1.5] whitespace-pre">Search invoices</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg" />
      </div>
    </div>
  );
}

function SendInvoiceButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="content-stretch flex h-9 items-center justify-start relative shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
    >
      <div className="bg-[#2f7685] box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0">
        <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
          <p className="leading-[1.5] whitespace-pre">Create invoice</p>
        </div>
      </div>
    </button>
  );
}

function StatusBadge({ status, text }: { status: 'paid' | 'overdue' | 'due', text: string }) {
  const getBadgeStyles = () => {
    switch (status) {
      case 'paid':
        return 'bg-[#318913]';
      case 'overdue':
        return 'bg-[#a85701]';
      case 'due':
        return 'bg-[#8c97ac]';
      default:
        return 'bg-[#8c97ac]';
    }
  };

  return (
    <div className={`${getBadgeStyles()} box-border content-stretch flex gap-1 items-center justify-start overflow-clip px-1 py-0 relative rounded shrink-0`}>
      <div className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-neutral-50 text-nowrap">
        <p className="leading-[1.5] whitespace-pre">{text}</p>
      </div>
    </div>
  );
}

function ActionButton({ icon, onClick }: { icon: 'mail' | 'download' | 'trash', onClick?: () => void }) {
  const getIconPath = () => {
    switch (icon) {
      case 'mail':
        return svgPaths.p80d7900;
      case 'download':
        return svgPaths.p38bee980;
      case 'trash':
        return svgPaths.p9c56500;
    }
  };

  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-start justify-start p-[8px] relative rounded-[100px] shrink-0 cursor-pointer hover:bg-[#f8f9fa] transition-colors" onClick={onClick}>
      <div aria-hidden="true" className="absolute border border-[#47567b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="relative shrink-0 size-5">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id={icon}>
            <path d={getIconPath()} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CheckboxComponent({ checked = false, onChange }: { checked?: boolean, onChange?: (checked: boolean) => void }) {
  return (
    <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0">
      <div className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0">
        <div 
          className="bg-[#ffffff] relative rounded shrink-0 size-4 cursor-pointer"
          onClick={() => onChange?.(!checked)}
        >
          <div aria-hidden="true" className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded" />
          {checked && (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M10 3L4.5 8.5L2 6" stroke="#47567B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TemplateTableRow({ 
  template, 
  isHeader = false 
}: { 
  template?: {
    name: string;
    service: string;
    amount: string;
    dateCreated: string;
    checked?: boolean;
  },
  isHeader?: boolean 
}) {
  const [checked, setChecked] = useState(template?.checked || false);

  if (isHeader) {
    return (
      <div className="bg-neutral-100 box-border content-stretch flex items-center justify-start mb-[-1px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[204px]">
          <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
            Invoice name
          </div>
        </div>
        <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[188px]">
          <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
            Service
          </div>
        </div>
        <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0">
          <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
            Total amount
          </div>
        </div>
        <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[574px]">
          <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
            Date created
          </div>
        </div>
        <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[204px]">
          <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
            Actions
          </div>
        </div>
      </div>
    );
  }

  if (!template) return null;

  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-center justify-start mb-[-1px] px-0 py-3 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
      
      {/* Template name with checkbox */}
      <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[204px]">
        <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0 w-[109px]">
          <div className="h-[18px] relative shrink-0 w-[61px]">
            <CheckboxComponent checked={checked} onChange={setChecked} />
          </div>
          <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
            {template.name}
          </div>
        </div>
      </div>

      {/* Service */}
      <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[184px]">
        <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
          {template.service}
        </div>
      </div>

      {/* Amount */}
      <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[138px]">
        <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
          {template.amount}
        </div>
      </div>

      {/* Date created */}
      <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[562px]">
        <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
          {template.dateCreated}
        </div>
      </div>

      {/* Actions */}
      <div className="box-border content-stretch flex gap-3 items-center justify-start pl-2.5 pr-0 py-0 relative shrink-0">
        <ActionButton icon="mail" />
        <ActionButton icon="download" />
        <ActionButton icon="trash" />
      </div>
    </div>
  );
}

function InvoiceTableRow({ 
  invoice, 
  isHeader = false 
}: { 
  invoice?: {
    id: string;
    client: string;
    service: string;
    amount: string;
    status: 'paid' | 'overdue' | 'due';
    statusText: string;
    dueDate: string;
    checked?: boolean;
  },
  isHeader?: boolean 
}) {
  const [checked, setChecked] = useState(invoice?.checked || false);

  if (isHeader) {
    return (
      <div className="bg-neutral-100 box-border content-stretch flex items-center justify-start mb-[-1px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[204px]">
          <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
            Invoice #
          </div>
        </div>
        <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[243px]">
          <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
            Client name
          </div>
        </div>
        <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[188px]">
          <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
            Service
          </div>
        </div>
        <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0">
          <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
            Total amount owed
          </div>
        </div>
        <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[130px]">
          <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
            Status
          </div>
        </div>
        <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[137px]">
          <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
            Due date
          </div>
        </div>
        <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[204px]">
          <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
            Actions
          </div>
        </div>
      </div>
    );
  }

  if (!invoice) return null;

  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-center justify-start mb-[-1px] px-0 py-3 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
      
      {/* Invoice # with checkbox */}
      <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[204px]">
        <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0 w-[109px]">
          <div className="h-[18px] relative shrink-0 w-[61px]">
            <CheckboxComponent checked={checked} onChange={setChecked} />
          </div>
          <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
            {invoice.id}
          </div>
        </div>
      </div>

      {/* Client name */}
      <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[245px]">
        <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
          {invoice.client}
        </div>
      </div>

      {/* Service */}
      <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[184px]">
        <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
          {invoice.service}
        </div>
      </div>

      {/* Amount */}
      <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[167px]">
        <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
          {invoice.amount}
        </div>
      </div>

      {/* Status */}
      <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[130px]">
        <StatusBadge status={invoice.status} text={invoice.statusText} />
      </div>

      {/* Due date */}
      <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[137px]">
        <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
          {invoice.dueDate}
        </div>
      </div>

      {/* Actions */}
      <div className="box-border content-stretch flex gap-3 items-center justify-start pl-2.5 pr-0 py-0 relative shrink-0">
        <ActionButton icon="mail" />
        <ActionButton icon="download" />
        <ActionButton icon="trash" />
      </div>
    </div>
  );
}

function PaymentsTableRow({ 
  payment, 
  isHeader = false 
}: { 
  payment?: {
    client: string;
    invoiceNumber: string;
    amount: string;
    paymentMethod: string;
    status: string;
    paidOn: string;
    checked?: boolean;
  },
  isHeader?: boolean 
}) {
  const [checked, setChecked] = useState(payment?.checked || false);

  if (isHeader) {
    return (
      <div className="bg-neutral-100 box-border content-stretch flex items-center justify-start mb-[-1px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[204px]">
          <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
            Client
          </div>
        </div>
        <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[184px]">
          <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
            Invoice number
          </div>
        </div>
        <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[146px]">
          <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
            Amount
          </div>
        </div>
        <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[147px]">
          <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
            Payment Method
          </div>
        </div>
        <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[123px]">
          <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
            Status
          </div>
        </div>
        <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[260px]">
          <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
            Paid on
          </div>
        </div>
        <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[204px]">
          <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
            Actions
          </div>
        </div>
      </div>
    );
  }

  if (!payment) return null;

  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-center justify-start mb-[-1px] px-0 py-3 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
      
      {/* Client */}
      <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[204px]">
        <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
          {payment.client}
        </div>
      </div>

      {/* Invoice Number */}
      <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[184px]">
        <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
          {payment.invoiceNumber}
        </div>
      </div>

      {/* Amount */}
      <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[146px]">
        <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
          {payment.amount}
        </div>
      </div>

      {/* Payment Method */}
      <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[147px]">
        <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
          {payment.paymentMethod}
        </div>
      </div>

      {/* Status */}
      <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[123px]">
        <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
          {payment.status}
        </div>
      </div>

      {/* Paid On */}
      <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[260px]">
        <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] tracking-[0.28px]">
          {payment.paidOn}
        </div>
      </div>

      {/* Actions */}
      <div className="box-border content-stretch flex gap-3 items-center justify-start pl-2.5 pr-0 py-0 relative shrink-0">
        <ActionButton icon="download" />
      </div>
    </div>
  );
}

// Empty state for payments
function PaymentsEmptyState() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex min-h-[300px] sm:min-h-[400px] items-center justify-center mb-[-1px] px-4 py-8 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center text-center max-w-md mx-auto min-h-[400px] py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mb-4">
          <h3 className="font-['Literata:Bold',_sans-serif] font-bold text-[#667593] text-2xl sm:text-3xl leading-tight">
            No payments received yet
          </h3>
        </div>
        <div>
          <p className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-sm sm:text-base leading-relaxed tracking-[0.28px]">
            When a client pays through Zinnia, the details will show up here automatically. No action needed on your end.
          </p>
        </div>
      </div>
    </div>
  );
}

function InvoiceTable({ activeTab, templates }: { activeTab: string, templates: any[] }) {
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    
    setShowLeftFade(scrollLeft > 0);
    setShowRightFade(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      setShowRightFade(scrollWidth > clientWidth);
    }
  }, []);

  // Empty payments data for demo
  const payments: any[] = [];

  if (activeTab === 'payments') {
    return (
      <div className="relative w-full">
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="box-border content-stretch flex flex-col items-start justify-start pb-px pt-0 px-0 min-w-[1400px] w-full">
            <PaymentsTableRow isHeader />
            {payments.length === 0 ? (
              <PaymentsEmptyState />
            ) : (
              payments.map((payment, index) => (
                <PaymentsTableRow key={payment.id} payment={payment} />
              ))
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Scroll hint */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-[#8c97ac] text-[12px] font-['Montserrat:Regular',_sans-serif] font-normal">
          Scroll horizontally to view all columns →
        </div>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="w-full overflow-x-auto scrollbar-hide"
        onScroll={handleScroll}
      >
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-px pt-0 px-0 min-w-[1400px] w-full">
          {activeTab === 'templates' ? (
            <>
              <TemplateTableRow isHeader />
              {templates.map((template, index) => (
                <TemplateTableRow key={template.id} template={template} />
              ))}
            </>
          ) : (
            <>
              <InvoiceTableRow isHeader />
              {SAMPLE_INVOICES.map((invoice, index) => (
                <InvoiceTableRow key={invoice.id} invoice={invoice} />
              ))}
            </>
          )}
        </div>
      </div>

      {/* Left fade indicator */}
      {showLeftFade && (
        <div className="absolute left-0 top-[40px] bottom-0 w-8 bg-gradient-to-r from-[#f0f5fa] to-transparent pointer-events-none z-10" />
      )}
      
      {/* Right fade indicator */}
      {showRightFade && (
        <div className="absolute right-0 top-[40px] bottom-0 w-8 bg-gradient-to-l from-[#f0f5fa] to-transparent pointer-events-none z-10" />
      )}
    </div>
  );
}

// Simple Bottom Nav
function MobileBottomNav({ onNavigate }: { onNavigate?: (view: string) => void }) {
  return (
    <div className="bg-neutral-50 box-border content-start flex flex-wrap gap-0 h-[75px] items-start justify-center p-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px]" onClick={() => onNavigate?.('dashboard')}>
        <div className="relative shrink-0 size-5">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d="M2.5 7.5L10 2.5L17.5 7.5V15.5C17.5 16.6046 16.6046 17.5 15.5 17.5H4.5C3.39543 17.5 2.5 16.6046 2.5 15.5V7.5Z" stroke="#47567B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold text-[#47567b] text-[10px] text-center tracking-[0.2px]">
          Home
        </div>
      </div>
      
      <div className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px]" onClick={() => onNavigate?.('calendar')}>
        <div className="relative shrink-0 size-5">
          <Calendar />
        </div>
        <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold text-[#47567b] text-[10px] text-center tracking-[0.2px]">
          Calendar
        </div>
      </div>
      
      <div className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px]" onClick={() => onNavigate?.('listings')}>
        <div className="relative shrink-0 size-5">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d="M8.5 3.5H6.5C5.39543 3.5 4.5 4.39543 4.5 5.5V16.5C4.5 17.6046 5.39543 18.5 6.5 18.5H13.5C14.6046 18.5 15.5 17.6046 15.5 16.5V5.5C15.5 4.39543 14.6046 3.5 13.5 3.5H11.5" stroke="#47567B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold text-neutral-100 text-[10px] text-center tracking-[0.2px]">
          Listings
        </div>
      </div>
      
      {/* Active Billing Tab */}
      <div className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px]">
        <div className="relative shrink-0 size-5">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="7.5" fill="#F5F5F5" stroke="#F5F5F5" strokeWidth="2"/>
            <path d="M10 6.5V13.5M8 8H11C11.5523 8 12 8.44772 12 9C12 9.55228 11.5523 10 11 10H9C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12H12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
          </svg>
        </div>
        <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold text-[#47567b] text-[10px] text-center tracking-[0.2px]">
          Billing
        </div>
      </div>
      
      <div className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px]">
        <div className="relative shrink-0 size-5">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="4" cy="10" r="1" fill="#47567B"/>
            <circle cx="10" cy="10" r="1" fill="#47567B"/>
            <circle cx="16" cy="10" r="1" fill="#47567B"/>
          </svg>
        </div>
        <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold text-[#47567b] text-[10px] text-center tracking-[0.2px]">
          More
        </div>
      </div>
    </div>
  );
}

function InvoiceTabsAndSearch({ 
  onOpenCreateInvoice, 
  templates, 
  refreshTemplates 
}: { 
  onOpenCreateInvoice?: () => void;
  templates: any[];
  refreshTemplates: () => void;
}) {
  const [activeTab, setActiveTab] = useState<'invoices' | 'templates' | 'payments'>('invoices');

  return (
    <div className="w-full">
      {/* Section Title */}
      <div className="mb-8">
        <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
          <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[32px] text-nowrap">
            <p className="leading-[1.5] whitespace-pre">Invoices & Payments</p>
          </div>
        </div>
      </div>

      {/* Search and Controls Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto sm:flex-1 sm:min-w-0 sm:max-w-[500px]">
          <InvoiceSearchBar />
          <div className="flex flex-col font-['Literata:Medium',_sans-serif] font-medium h-12 justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px] w-full sm:w-auto sm:min-w-0 sm:max-w-[120px]">
            <p className="leading-[1.5] truncate">
              {activeTab === 'templates' ? `${templates.length} templates` : 
               activeTab === 'invoices' ? `${SAMPLE_INVOICES.length} invoices` :
               `0 payments`}
            </p>
          </div>
        </div>
        <div className="w-full sm:w-auto flex justify-end sm:flex-shrink-0">
          {activeTab === 'templates' ? (
            <button
              onClick={onOpenCreateInvoice}
              className="content-stretch flex h-9 items-center justify-start relative shrink-0 cursor-pointer hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              <div className="bg-[#2f7685] box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0 w-full sm:w-auto justify-center sm:justify-start">
                <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
                  <p className="leading-[1.5] whitespace-pre">Create template</p>
                </div>
              </div>
            </button>
          ) : activeTab === 'invoices' ? (
            <button
              onClick={onOpenCreateInvoice}
              className="content-stretch flex h-9 items-center justify-start relative shrink-0 cursor-pointer hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              <div className="bg-[#2f7685] box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0 w-full sm:w-auto justify-center sm:justify-start">
                <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
                  <p className="leading-[1.5] whitespace-pre">Create invoice</p>
                </div>
              </div>
            </button>
          ) : null}
        </div>
      </div>

      {/* Tabs */}
      <div className="relative w-full mb-8">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-300 border-solid inset-0 pointer-events-none" />
        <div className="flex gap-4">
          <div 
            className={`h-9 relative shrink-0 cursor-pointer ${activeTab === 'payments' ? '' : 'opacity-70'}`}
            onClick={() => setActiveTab('payments')}
          >
            <div className="box-border content-stretch flex gap-3 h-9 items-center justify-start overflow-clip p-[8px] relative">
              <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
                <p className="leading-[1.5] whitespace-pre">Zinnia Payments</p>
              </div>
            </div>
            {activeTab === 'payments' && (
              <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-neutral-900 border-solid inset-0 pointer-events-none" />
            )}
          </div>
          <div 
            className={`h-9 relative shrink-0 cursor-pointer ${activeTab === 'invoices' ? '' : 'opacity-70'}`}
            onClick={() => setActiveTab('invoices')}
          >
            <div className="box-border content-stretch flex gap-3 h-9 items-center justify-start overflow-clip p-[8px] relative">
              <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
                <p className="leading-[1.5] whitespace-pre">Invoices</p>
              </div>
            </div>
            {activeTab === 'invoices' && (
              <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-neutral-900 border-solid inset-0 pointer-events-none" />
            )}
          </div>
          <div 
            className={`h-9 relative shrink-0 cursor-pointer ${activeTab === 'templates' ? '' : 'opacity-70'}`}
            onClick={() => setActiveTab('templates')}
          >
            <div className="box-border content-stretch flex gap-3 h-9 items-center justify-start overflow-clip p-[8px] relative">
              <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
                <p className="leading-[1.5] whitespace-pre">Invoice templates</p>
              </div>
            </div>
            {activeTab === 'templates' && (
              <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-neutral-900 border-solid inset-0 pointer-events-none" />
            )}
          </div>
        </div>
      </div>

      {/* Description text for payments tab */}
      {activeTab === 'payments' && (
        <div className="mb-6">
          <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]">
            <p className="leading-[1.5] whitespace-pre">These are payments processed through the zinnia platform. </p>
          </div>
        </div>
      )}

      <InvoiceTable activeTab={activeTab} templates={templates} />
    </div>
  );
}

// Main Component - Complete Invoice Management Interface
export default function Invoice({ 
  onNavigate,
  hasCompletedListing = false,
  hasVisitedCalendar = false,
  currentView
}: InvoiceProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCreateInvoiceOpen, setIsCreateInvoiceOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'invoices' | 'templates' | 'payments'>('invoices');
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');

  const handleTemplateSelect = (templateId: string) => {
    console.log('📋 Template selected:', templateId);
    setSelectedTemplate(templateId);
    // Navigate to the contacts step
    onNavigate?.('invoiceContacts');
  };

  const handleStartFromScratch = () => {
    console.log('📋 Starting from scratch');
    // Navigate to the contacts step
    onNavigate?.('invoiceContacts');
  };

  const [showSuccess, setShowSuccess] = useState(false);
  const [templates, setTemplates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isOfflineMode, setIsOfflineMode] = useState(false);

  // Function to fetch templates from API
  const fetchTemplates = async () => {
    try {
      console.log('📋 Fetching invoice templates...');
      console.log('🔗 Server URL:', `${supabaseFunctionsBaseUrl}/make-server-6e4d8724/invoice-templates`);
      console.log('🔑 Using projectId:', projectId);
      console.log('🔑 Using publicAnonKey:', publicAnonKey ? 'Present' : 'Missing');
      
      setLoading(true);
      
      // First try to check if the server is reachable with a health check
      try {
        console.log('🏥 Testing server connectivity with health check...');
        const healthResponse = await fetch(`${supabaseFunctionsBaseUrl}/make-server-6e4d8724/health`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        });
        
        if (healthResponse.ok) {
          const healthData = await healthResponse.json();
          console.log('✅ Server health check passed:', healthData);
        } else {
          console.warn('⚠️ Server health check failed:', healthResponse.status, healthResponse.statusText);
        }
      } catch (healthError) {
        console.error('❌ Server health check error:', healthError);
        throw new Error(`Server unreachable: ${healthError instanceof Error ? healthError.message : 'Unknown error'}`);
      }
      
      const response = await fetch(`${supabaseFunctionsBaseUrl}/make-server-6e4d8724/invoice-templates`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('📋 Invoice templates response status:', response.status);
      console.log('📋 Invoice templates response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('📋 Invoice templates API error:', errorText);
        throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
      }

      const data = await response.json();
      console.log('📋 Templates response:', data);
      
      if (data.success && data.templates) {
        setTemplates(data.templates);
        setError(null);
        setIsOfflineMode(false);
      } else {
        console.warn('⚠️ No templates found or API returned error:', data);
        setTemplates([]);
      }
    } catch (err) {
      console.error('❌ Error fetching templates:', err);
      
      // Provide more specific error messages
      let errorMessage = 'Failed to fetch templates';
      if (err instanceof Error) {
        if (err.message.includes('Failed to fetch')) {
          errorMessage = 'The Supabase Edge Function appears to not be deployed or running. This is normal in development environments.';
        } else if (err.message.includes('Server unreachable')) {
          errorMessage = `Server connection failed: ${err.message}`;
        } else {
          errorMessage = err.message;
        }
      }
      
      setError(errorMessage);
      setTemplates([]);
    } finally {
      setLoading(false);
    }
  };

  // Function to enter demo mode with mock data
  const enterDemoMode = () => {
    console.log('🎭 Entering demo mode with mock templates');
    setIsOfflineMode(true);
    setError(null);
    setLoading(false);
    
    // Use mock templates from the constants
    const mockTemplates = INVOICE_TEMPLATES.map(template => ({
      id: `mock_${template.id}`,
      name: template.name,
      service: template.service, 
      amount: template.amount,
      dateCreated: template.dateCreated
    }));
    
    setTemplates(mockTemplates);
    console.log('✅ Demo mode activated with mock templates:', mockTemplates);
  };

  // Function to refresh templates (called after creating new template)
  const refreshTemplates = () => {
    console.log('🔄 Refreshing templates...');
    if (isOfflineMode) {
      console.log('🎭 In demo mode, using mock data refresh');
      enterDemoMode();
    } else {
      fetchTemplates();
    }
  };

  // Fetch templates on component mount (but skip if already in offline mode)
  useEffect(() => {
    if (!isOfflineMode) {
      fetchTemplates();
    }
  }, [isOfflineMode]);

  const handleOpenCreateInvoice = () => {
    setIsCreateInvoiceOpen(true);
  };

  const handleCloseCreateInvoice = () => {
    setIsCreateInvoiceOpen(false);
  };

  const handleInvoiceCreated = () => {
    setIsCreateInvoiceOpen(false);
    setShowSuccess(true);
    
    // In demo mode, add a mock template
    if (isOfflineMode) {
      const newMockTemplate = {
        id: `mock_new_${Date.now()}`,
        name: 'New Template',
        service: 'Wedding Service',
        amount: '$2,500.00',
        dateCreated: new Date().toLocaleDateString()
      };
      setTemplates(prev => [...prev, newMockTemplate]);
    } else {
      refreshTemplates(); // Refresh templates when a new one is created
    }
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  if (showSuccess) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#f0f5fa]">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="text-[#318913] text-[48px] mb-4">✓</div>
          <h2 className="text-[#47567b] text-[20px] font-['Literata:Medium',_sans-serif] font-medium mb-2">
            Invoice template created successfully!
          </h2>
          <p className="text-[#667593] text-[14px] font-['Montserrat:Regular',_sans-serif]">
            Your template has been saved and is ready to use.
            {isOfflineMode && (
              <span className="block mt-2 text-[#a85701]">
                (Demo Mode - Changes are not persisted)
              </span>
            )}
          </p>
        </div>
      </div>
    );
  }

  if (isCreateInvoiceOpen) {
    return (
      <CreateInvoice
        isOpen={isCreateInvoiceOpen}
        onNavigate={onNavigate}
        onClose={handleCloseCreateInvoice}
        onInvoiceCreated={handleInvoiceCreated}
        onSelectTemplate={handleTemplateSelect}
        onStartFromScratch={handleStartFromScratch}
        hasCompletedListing={hasCompletedListing}
        hasVisitedCalendar={hasVisitedCalendar}
        currentView={currentView}
      />
    );
  }

  // Display error message if there's an error
  if (error && !isOfflineMode) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#f0f5fa]">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
          <div className="text-[#a85701] text-[48px] mb-4">⚠️</div>
          <h2 className="text-[#47567b] text-[20px] font-['Literata:Medium',_sans-serif] font-medium mb-2">
            Server Connection Failed
          </h2>
          <div className="text-[#667593] text-[14px] font-['Montserrat:Regular',_sans-serif] mb-4">
            {error}
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={fetchTemplates}
              className="bg-[#2f7685] text-white px-4 py-2 rounded-lg font-['Montserrat:Medium',_sans-serif] hover:opacity-90 transition-opacity"
            >
              Retry Connection
            </button>
            <button
              onClick={enterDemoMode}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg font-['Montserrat:Medium',_sans-serif] hover:opacity-90 transition-opacity"
            >
              Continue Without Server (Demo Mode)
            </button>
          </div>
          <div className="mt-4 p-3 bg-[#f8f9fa] rounded text-[12px] text-[#667593] text-left">
            <strong>Deployment Instructions:</strong><br/>
            1. Run: <code className="bg-[#e5e7eb] px-1 py-0.5 rounded">supabase functions deploy server</code><br/>
            2. Set Stripe key: <code className="bg-[#e5e7eb] px-1 py-0.5 rounded">supabase secrets set STRIPE_SECRET_KEY=your_key</code><br/>
            3. See <code>/DEPLOY_SERVER.md</code> for full instructions<br/>
            <br/>
            <strong>Or use Demo Mode:</strong><br/>
            • Demo mode lets you explore the full interface<br/>
            • Uses mock data for templates and invoices<br/>
            • Perfect for testing without server deployment
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden lg:flex h-screen bg-[#f0f5fa] flex-col">
        <div className="flex flex-1">
          <div className="flex-1 overflow-auto">
            <div className="p-6">
              <InvoiceTabsAndSearch 
                onOpenCreateInvoice={handleOpenCreateInvoice}
                templates={templates}
                refreshTemplates={refreshTemplates}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden h-screen bg-[#f0f5fa] flex flex-col">
        {/* Mobile Content */}
        <div className="flex-1 overflow-auto p-4">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-[#667593] text-[14px] font-['Montserrat:Regular',_sans-serif]">
                Loading templates...
              </div>
            </div>
          ) : (
            <InvoiceTabsAndSearch 
              onOpenCreateInvoice={handleOpenCreateInvoice}
              templates={templates}
              refreshTemplates={refreshTemplates}
            />
          )}
        </div>

        {/* Mobile Bottom Navigation */}
        <MobileBottomNav onNavigate={onNavigate} />
      </div>
    </>
  );
}