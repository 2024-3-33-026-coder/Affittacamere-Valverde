export interface AmenityItem {
  name: string;
  category: 'featured' | 'parking' | 'internet' | 'pools' | 'wellness' | 'pets' | 'policies';
  description?: string;
  isAvailable: boolean;
}

export interface SustainabilityCategory {
  id: string;
  title: string;
  iconName: string;
  commitments: string[];
}

export interface DetailItem {
  id: string;
  title: string;
  caption: string;
  aspect: string;
  category: string;
  imgSrc?: string;
  palette: {
    bg: string;
    accent: string;
    border: string;
  };
}

export interface BookingFormData {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  guestName: string;
  email: string;
  phone: string;
  notes: string;
}
