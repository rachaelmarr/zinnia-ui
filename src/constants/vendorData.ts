import type { VendorDetails } from '../types';

export const MOCK_VENDOR_DATA: Record<string, VendorDetails> = {
  'lindas-wedding-photography': {
    id: 'lindas-wedding-photography',
    name: "Linda's Wedding Photography",
    location: "Chicago, IL",
    rating: 4.0,
    reviewCount: 2,
    priceFrom: 1092,
    image: 'https://images.unsplash.com/photo-1606800052052-a1d5cd528b3e?w=800&h=600&fit=crop',
    isFavorited: false,
    category: "photographers",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet nibh ligula. Vestibulum porttitor eros at commodo finibus. Sed eget sodales tellus. Maecenas rutrum leo id ex fringilla vestibulum. Nullam sed venenatis quam",
    gallery: [
      'https://images.unsplash.com/photo-1606800052052-a1d5cd528b3e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?w=400&h=300&fit=crop'
    ],
    businessInfo: {
      basedIn: "Skokie, IL",
      businessType: 'mobile'
    },
    services: [
      {
        id: 'wedding-day-photography',
        name: 'Wedding Day Photography',
        image: 'https://images.unsplash.com/photo-1606800052052-a1d5cd528b3e?w=452&h=368&fit=crop',
        hoursIncluded: 5,
        totalGuests: 10,
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam ultrices tempor.',
        whatsIncluded: ['Ceremony', 'Bridal portraits', 'First Look', 'Reception'],
        whatsDelivered: ['Online gallery', 'Photo album', 'Same day prints'],
        price: 1092
      },
      {
        id: 'engagement-photography',
        name: 'Engagement Photography',
        image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=452&h=368&fit=crop',
        hoursIncluded: 5,
        totalGuests: 10,
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam ultrices tempor.',
        whatsIncluded: ['Engagement session', 'Location scouting', 'Outfit changes'],
        whatsDelivered: ['Online gallery', 'Photo album', 'Same day prints'],
        price: 1092
      },
      {
        id: 'elopement-photography',
        name: 'Elopement Photography',
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=452&h=368&fit=crop',
        hoursIncluded: 5,
        totalGuests: 10,
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam ultrices tempor.',
        whatsIncluded: ['Intimate ceremony', 'Couple portraits', 'Detail shots'],
        whatsDelivered: ['Online gallery', 'Photo album', 'Same day prints'],
        price: 1092
      }
    ],
    reviews: [
      {
        id: 'review-1',
        customerName: 'Maya Rudolph',
        rating: 4,
        date: 'November 30, 2023',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet nibh ligula. Vestibulum porttitor eros at commodo finibus. Sed eget sodales tellus. Maecenas rutrum leo id ex fringilla vestibulum. Nullam sed venenatis quam'
      },
      {
        id: 'review-2',
        customerName: 'Maya Rudolph',
        rating: 4,
        date: 'November 30, 2023',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet nibh ligula. Vestibulum porttitor eros at commodo finibus. Sed eget sodales tellus. Maecenas rutrum leo id ex fringilla vestibulum. Nullam sed venenatis quam'
      }
    ]
  },
  'daisys-flowers': {
    id: 'daisys-flowers',
    name: "Daisy's Flowers",
    location: "Chicago, IL",
    rating: 4.0,
    reviewCount: 3,
    priceFrom: 450,
    image: 'https://images.unsplash.com/photo-1606800052052-a1d5cd528b3e?w=800&h=600&fit=crop',
    isFavorited: false,
    category: "florists",
    description: "Daisy's Flowers creates stunning, bespoke floral arrangements for weddings and special events. With over 10 years of experience, we specialize in romantic, garden-style designs using the freshest seasonal blooms. From intimate elopements to grand celebrations, we bring your floral vision to life.",
    gallery: [
      'https://images.unsplash.com/photo-1606800052052-a1d5cd528b3e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?w=400&h=300&fit=crop'
    ],
    businessInfo: {
      basedIn: "Chicago, IL",
      businessType: 'mobile'
    },
    services: [
      {
        id: 'wedding-bouquets',
        name: 'Wedding Bouquets',
        image: 'https://images.unsplash.com/photo-1606800052052-a1d5cd528b3e?w=452&h=368&fit=crop',
        hoursIncluded: 2,
        totalGuests: 6,
        description: 'Beautiful custom wedding bouquets designed to match your wedding theme and personal style.',
        whatsIncluded: ['Bridal bouquet', 'Bridesmaids bouquets', 'Boutonnieres'],
        whatsDelivered: ['Fresh flowers', 'Custom design', 'Delivery on wedding day'],
        price: 450
      },
      {
        id: 'centerpieces',
        name: 'Reception Centerpieces',
        image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=452&h=368&fit=crop',
        hoursIncluded: 3,
        totalGuests: 100,
        description: 'Elegant centerpieces that create the perfect ambiance for your reception tables.',
        whatsIncluded: ['Table centerpieces', 'Candles', 'Floral arrangements'],
        whatsDelivered: ['Fresh seasonal flowers', 'Table arrangements', 'Setup service'],
        price: 750
      },
      {
        id: 'ceremony-arrangements',
        name: 'Ceremony Arrangements',
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=452&h=368&fit=crop',
        hoursIncluded: 4,
        totalGuests: 150,
        description: 'Stunning floral arrangements for your ceremony including altar pieces and aisle decorations.',
        whatsIncluded: ['Altar arrangements', 'Aisle petals', 'Welcome arrangements'],
        whatsDelivered: ['Ceremony florals', 'Aisle decoration', 'Altar arrangements'],
        price: 850
      }
    ],
    reviews: [
      {
        id: 'review-1',
        customerName: 'Sarah Johnson',
        rating: 5,
        date: 'June 15, 2024',
        comment: "Daisy's Flowers exceeded all my expectations! The bridal bouquet was absolutely stunning and perfectly matched our garden wedding theme. The team was professional, punctual, and created magic with every arrangement. Highly recommend for anyone looking for exceptional floral design."
      },
      {
        id: 'review-2',
        customerName: 'Michael Chen',
        rating: 4,
        date: 'May 28, 2024',
        comment: "Beautiful work on our ceremony arrangements! The altar pieces were breathtaking and the aisle petals created such a romantic atmosphere. Great communication throughout the planning process."
      },
      {
        id: 'review-3',
        customerName: 'Emily Rodriguez',
        rating: 5,
        date: 'April 10, 2024',
        comment: "Working with Daisy's Flowers was a dream! They brought our vision to life with such creativity and attention to detail. The centerpieces were the talk of our reception. Worth every penny!"
      }
    ]
  },
  'garden-district-venue': {
    id: 'garden-district-venue',
    name: "Garden District Venue",
    location: "New Orleans, LA",
    rating: 4.5,
    reviewCount: 15,
    priceFrom: 8000,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    isFavorited: false,
    category: "venues",
    description: "Nestled in the heart of New Orleans' historic Garden District, our venue offers timeless elegance with Southern charm. Featuring manicured gardens, historic architecture, and world-class amenities, we provide the perfect backdrop for your special day.",
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400&h=300&fit=crop'
    ],
    businessInfo: {
      basedIn: "New Orleans, LA",
      businessType: 'physical'
    },
    services: [
      {
        id: 'garden-ceremony',
        name: 'Garden Ceremony',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=452&h=368&fit=crop',
        hoursIncluded: 6,
        totalGuests: 150,
        description: 'Exchange vows in our stunning garden setting with century-old oak trees and blooming magnolias.',
        whatsIncluded: ['Garden ceremony space', 'Seating for 150', 'Bridal suite', 'Sound system'],
        whatsDelivered: ['Setup assistance', 'Day-of coordination', 'Cleanup service'],
        price: 8000
      },
      {
        id: 'ballroom-reception',
        name: 'Ballroom Reception',
        image: 'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?w=452&h=368&fit=crop',
        hoursIncluded: 8,
        totalGuests: 200,
        description: 'Celebrate in our elegant ballroom featuring crystal chandeliers and hardwood floors.',
        whatsIncluded: ['Ballroom space', 'Tables and chairs', 'Dance floor', 'Bar service'],
        whatsDelivered: ['Full setup', 'Event coordination', 'Cleanup service'],
        price: 12000
      },
      {
        id: 'intimate-gathering',
        name: 'Intimate Gathering',
        image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=452&h=368&fit=crop',
        hoursIncluded: 4,
        totalGuests: 50,
        description: 'Perfect for smaller celebrations in our charming courtyard setting.',
        whatsIncluded: ['Courtyard space', 'Intimate seating', 'String lighting', 'Sound system'],
        whatsDelivered: ['Setup assistance', 'Basic coordination', 'Cleanup service'],
        price: 4500
      }
    ],
    reviews: [
      {
        id: 'review-1',
        customerName: 'Jessica Williams',
        rating: 5,
        date: 'October 15, 2024',
        comment: 'Garden District Venue was absolutely perfect for our wedding! The gardens were breathtaking, and the staff went above and beyond to make our day special. The historic charm combined with modern amenities made it ideal for our guests.'
      },
      {
        id: 'review-2',
        customerName: 'Robert Davis',
        rating: 4,
        date: 'September 8, 2024',
        comment: 'Beautiful venue with incredible attention to detail. The ballroom was elegant and the outdoor spaces were stunning. The coordination team was professional and helpful throughout the planning process.'
      }
    ]
  }
};