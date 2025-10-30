// This component has been replaced by AccountTypeSelection for a more comprehensive design
// This file exists to maintain compatibility but redirects to AccountTypeSelection

import AccountTypeSelection from './AccountTypeSelection';

interface UserTypeSelectionProps {
  onNavigate: (view: string) => void;
  onNext: (accountType: 'couple' | 'vendor') => void;
  onCancel: () => void;
}

export default function UserTypeSelection(props: UserTypeSelectionProps) {
  return <AccountTypeSelection {...props} />;
}