# Calendar Component

A reusable calendar component with date picker functionality.

## Usage

```tsx
import Calendar from './Calendar';

function MyComponent() {
  const [selectedDate, setSelectedDate] = useState('Any Day');

  return (
    <Calendar
      value={selectedDate}
      onChange={setSelectedDate}
      placeholder="Select a date"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Current selected date value |
| `onChange` | `(date: string) => void` | - | Callback when date is selected |
| `placeholder` | `string` | `"Any Day"` | Placeholder text when no date selected |
| `disabled` | `boolean` | `false` | Disable the calendar input |
| `className` | `string` | `""` | Additional CSS classes |
| `minDate` | `Date` | `new Date()` | Minimum selectable date (defaults to today) |
| `maxDate` | `Date` | - | Maximum selectable date |
| `dateFormat` | `'short' \| 'long' \| 'iso'` | `'short'` | Date format for returned value |

## Date Formats

- `'short'`: "Wed, Dec 25, 2024" (default)
- `'long'`: "Wednesday, December 25, 2024"
- `'iso'`: "2024-12-25"

## Examples

### Basic Usage
```tsx
<Calendar
  value={date}
  onChange={setDate}
/>
```

### With Custom Placeholder
```tsx
<Calendar
  value={eventDate}
  onChange={setEventDate}
  placeholder="Choose event date"
/>
```

### With Date Range Restrictions
```tsx
<Calendar
  value={appointmentDate}
  onChange={setAppointmentDate}
  minDate={new Date()} // Today or later
  maxDate={new Date(2024, 11, 31)} // No later than Dec 31, 2024
/>
```

### Disabled State
```tsx
<Calendar
  value={lockedDate}
  onChange={setLockedDate}
  disabled={true}
  placeholder="Date locked"
/>
```

### Custom Date Format
```tsx
<Calendar
  value={isoDate}
  onChange={setIsoDate}
  dateFormat="iso"
  placeholder="Select date (ISO format)"
/>
```

## Features

- ✅ Date picker with month/year navigation
- ✅ Smart positioning (above/below based on viewport space)
- ✅ Click outside to close
- ✅ Keyboard accessible
- ✅ Disabled past dates by default
- ✅ Custom min/max date restrictions
- ✅ Multiple date format options
- ✅ Responsive design
- ✅ Today highlighting
- ✅ Selected date persistence
- ✅ Custom styling support