// Shared invoice template and invoice data for consistency across components

export interface InvoiceTemplate {
  id: string;
  name: string;
  service: string;
  amount: string;
  dateCreated: string;
  checked?: boolean;
}

export interface Invoice {
  id: string;
  client: string;
  service: string;
  amount: string;
  status: 'paid' | 'overdue' | 'due';
  statusText: string;
  dueDate: string;
  checked?: boolean;
}

// Invoice Templates - shared between Invoice component table and CreateInvoice dropdown
export const INVOICE_TEMPLATES: InvoiceTemplate[] = [
  {
    id: 'template_001',
    name: 'Half day invoice',
    service: 'Make up',
    amount: '$5,000.00',
    dateCreated: 'May 31, 2023'
  },
  {
    id: 'template_002', 
    name: 'Full day invoice',
    service: 'Hair',
    amount: '$2,000.00',
    dateCreated: 'March 31, 2023'
  }
];

// Sample Invoices
export const SAMPLE_INVOICES: Invoice[] = [
  {
    id: 'INV001',
    client: 'Bradley Cooper',
    service: 'Make up',
    amount: '$5,000.00',
    status: 'paid',
    statusText: 'Paid',
    dueDate: 'May 31, 2023'
  },
  {
    id: 'INV002',
    client: 'Tina Gretch',
    service: 'Hair',
    amount: '$2,000.00',
    status: 'overdue',
    statusText: 'Overdue 6 days',
    dueDate: 'March 31, 2023'
  },
  {
    id: 'INV003',
    client: 'Olivia & Noah',
    service: 'Hair',
    amount: '$4,000.00',
    status: 'due',
    statusText: 'Due in 16 days',
    dueDate: 'April 19, 2023'
  },
  {
    id: 'INV004',
    client: 'Emily & John',
    service: 'Hair',
    amount: '$4,000.00',
    status: 'paid',
    statusText: 'Paid',
    dueDate: 'March 5, 2023'
  }
];