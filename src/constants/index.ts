import type { CalendarDate, WizardData } from '../types';

export const CALENDAR_DATES: CalendarDate[] = [
  { day: 'THU', date: 26, month: 'Jun' },
  { day: 'FRI', date: 27, month: 'Jun' },
  { day: 'SAT', date: 28, month: 'Jun' },
  { day: 'SUN', date: 29, month: 'Jun' },
  { day: 'MON', date: 30, month: 'Jun' },
  { day: 'TUE', date: 1, month: 'Jul' },
  { day: 'WED', date: 2, month: 'Jul' }
];

export const INITIAL_WIZARD_DATA: WizardData = {
  photos: [],
  businessHours: [
    { name: 'Sunday', enabled: true, startTime: '9:00 AM', endTime: '5:00 PM' },
    { name: 'Monday', enabled: true, startTime: '9:00 AM', endTime: '5:00 PM' },
    { name: 'Tuesday', enabled: false, startTime: '9:00 AM', endTime: '5:00 PM' },
    { name: 'Wednesday', enabled: true, startTime: '9:00 AM', endTime: '5:00 PM' },
    { name: 'Thursday', enabled: true, startTime: '9:00 AM', endTime: '5:00 PM' },
    { name: 'Friday', enabled: true, startTime: '9:00 AM', endTime: '5:00 PM' },
    { name: 'Saturday', enabled: true, startTime: '9:00 AM', endTime: '5:00 PM' }
  ],
  description: '',
  service: {
    serviceName: 'Wedding photography',
    type: 'Wedding day',
    hours: '5',
    description: '',
    serviceLocation: 'mobile',
    travelRadius: '50 miles',
    price: '300',
    included: {
      ceremony: false,
      reception: false,
      bridalPortraits: false,
      firstLook: false,
      other: false
    },
    delivered: {
      onlineGallery: false,
      photoAlbum: false,
      sameDayPrints: false,
      uneditedPhotos: false,
      highlightFilm: false,
      other: false
    },
    deliveryTime: '30 days'
  }
};