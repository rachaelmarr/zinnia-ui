import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import svgPaths from "../imports/svg-1ttw622xvq";

interface CalendarProps {
  value: string;
  onChange: (date: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  minDate?: Date;
  maxDate?: Date;
  dateFormat?: 'short' | 'long' | 'iso';
}

function CalendarIcon() {
  return (
    <div className="relative shrink-0 size-5" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="calendar">
          <path
            d={svgPaths.p111ed900}
            id="Vector"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const weekdays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

export default function Calendar({ 
  value, 
  onChange, 
  placeholder = "Any Day",
  disabled = false,
  className = "",
  minDate,
  maxDate,
  dateFormat = 'short'
}: CalendarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [calendarPosition, setCalendarPosition] = useState<{
    top: number;
    left: number;
    positioning: 'below' | 'above';
  }>({ top: 0, left: 0, positioning: 'below' });
  const [justOpened, setJustOpened] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Set default minDate to today if not provided
  const effectiveMinDate = minDate || today;

  // Close calendar when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (justOpened) return;
      
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node) &&
          inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [justOpened]);

  // Parse the current value to set selected date
  useEffect(() => {
    if (value && value !== 'Any Day' && value !== placeholder) {
      const parsed = new Date(value);
      if (!isNaN(parsed.getTime())) {
        setSelectedDate(parsed);
        setCurrentDate(new Date(parsed.getFullYear(), parsed.getMonth(), 1));
      }
    }
  }, [value, placeholder]);

  const handleInputClick = (event: React.MouseEvent) => {
    if (disabled) return;
    
    event.preventDefault();
    event.stopPropagation();
    
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    setJustOpened(newIsOpen);
    
    if (newIsOpen) {
      // Calculate position relative to the input
      if (inputRef.current) {
        const rect = inputRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const calendarHeight = 400; // approximate calendar height
        
        // Check if there's enough space below
        const spaceBelow = viewportHeight - rect.bottom;
        const shouldShowAbove = spaceBelow < calendarHeight && rect.top > calendarHeight;
        
        setCalendarPosition({
          top: shouldShowAbove ? -calendarHeight - 10 : rect.height + 5,
          left: 0,
          positioning: shouldShowAbove ? 'above' : 'below'
        });
      } else {
        // Fallback positioning
        setCalendarPosition({
          top: 45,
          left: 0,
          positioning: 'below'
        });
      }
      
      // Reset justOpened flag after a brief delay
      setTimeout(() => setJustOpened(false), 100);
    } else {
      setJustOpened(false);
    }
  };

  const formatDate = (date: Date): string => {
    switch (dateFormat) {
      case 'long':
        return date.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      case 'iso':
        return date.toISOString().split('T')[0];
      case 'short':
      default:
        return date.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        });
    }
  };

  const handleDateClick = (date: Date) => {
    if (isDateDisabled(date)) return;
    
    setSelectedDate(date);
    setIsOpen(false);
    onChange(formatDate(date));
  };

  const isDateDisabled = (date: Date): boolean => {
    if (disabled) return true;
    if (date < effectiveMinDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    const startDate = new Date(firstDay);
    const dayOfWeek = firstDay.getDay();
    const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    startDate.setDate(firstDay.getDate() - daysToSubtract);
    
    const days = [];
    const currentCalendarDate = new Date(startDate);
    
    for (let i = 0; i < 42; i++) {
      days.push(new Date(currentCalendarDate));
      currentCalendarDate.setDate(currentCalendarDate.getDate() + 1);
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();
  const displayValue = (value === 'Any Day' || value === placeholder || !value) ? placeholder : value;
  
  const isToday = (date: Date) => {
    return date.toDateString() === today.toDateString();
  };
  
  const isSelected = (date: Date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString();
  };
  
  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentDate.getMonth();
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Input Field */}
      <div
        ref={inputRef}
        onClick={handleInputClick}
        className={`
          bg-white h-9 relative rounded-lg w-full transition-opacity
          ${disabled 
            ? 'cursor-not-allowed opacity-50' 
            : 'cursor-pointer hover:shadow-sm'
          }
        `}
        style={{ pointerEvents: 'auto' }}
      >
        <div className="flex flex-row items-center overflow-clip relative size-full" style={{ pointerEvents: 'none' }}>
          <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start p-3 relative w-full">
            <CalendarIcon />
            <div className="basis-0 box-border content-stretch flex flex-row gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
              <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-left text-nowrap tracking-[0.28px]">
                <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
                  {displayValue}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute border border-[#2e7684] border-solid inset-0 pointer-events-none rounded-lg"
        />
      </div>

      {/* Calendar Dropdown */}
      {isOpen && !disabled && (
        <div
          ref={calendarRef}
          className="absolute bg-white box-border content-stretch flex flex-col gap-6 items-start justify-start p-6 rounded-lg shadow-lg border border-[#ccd7e6]"
          style={{ 
            width: '320px', 
            maxWidth: 'calc(100vw - 20px)',
            top: calendarPosition.top,
            left: calendarPosition.left,
            zIndex: 9999
          }}
        >
          {/* Month Selector */}
          <div className="relative flex items-center justify-between w-full">
            <button
              onClick={goToPreviousMonth}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              type="button"
            >
              <ChevronLeft size={16} className="text-[#333333]" />
            </button>
            
            <div className="flex flex-col justify-center text-center">
              <p className="font-['Literata:Bold',_sans-serif] font-bold text-[#47567b] text-[18px] leading-[1.25] whitespace-pre capitalize">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </p>
            </div>
            
            <button
              onClick={goToNextMonth}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              type="button"
            >
              <ChevronRight size={16} className="text-[#333333]" />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="flex flex-col gap-4">
            {/* Weekdays */}
            <div className="grid grid-cols-7 gap-x-6">
              {weekdays.map((day) => (
                <div
                  key={day}
                  className="flex flex-col justify-center text-center w-6"
                >
                  <p className="font-['Literata:ExtraBold',_sans-serif] font-extrabold text-[#47567b] text-[12px] leading-[1.5] tracking-[0.24px]">
                    {day}
                  </p>
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-x-6 gap-y-2">
              {calendarDays.map((date, index) => {
                const isCurrentMonthDate = isCurrentMonth(date);
                const isTodayDate = isToday(date);
                const isSelectedDate = isSelected(date);
                const isDisabled = isDateDisabled(date);
                
                return (
                  <div
                    key={index}
                    className="relative flex items-center justify-center w-6 h-6"
                  >
                    {/* Selected day circle background */}
                    {isSelectedDate && (
                      <div className="absolute inset-0 rounded-full bg-[#2E7684]" />
                    )}
                    
                    {/* Current day circle background - only show if no date is selected */}
                    {!selectedDate && isTodayDate && !isDisabled && (
                      <div className="absolute inset-0 rounded-full bg-[#2E7684]" />
                    )}
                    
                    <button
                      onClick={() => handleDateClick(date)}
                      disabled={isDisabled}
                      type="button"
                      className={`
                        relative z-10 flex items-center justify-center w-6 h-6 rounded-full transition-colors
                        ${isDisabled 
                          ? 'cursor-not-allowed opacity-40' 
                          : 'hover:bg-gray-100 cursor-pointer'
                        }
                        ${!isCurrentMonthDate && !isTodayDate && !isSelectedDate ? 'opacity-40' : ''}
                      `}
                    >
                      <p className={`
                        font-['Montserrat:Regular',_sans-serif] font-normal text-[12px] leading-[1] tracking-[0.24px] text-center
                        ${(isSelectedDate || (!selectedDate && isTodayDate && !isDisabled))
                          ? 'text-white' 
                          : 'text-[#47567b]'
                        }
                      `}>
                        {date.getDate()}
                      </p>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}