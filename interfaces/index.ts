export interface CardProps {
    title: string;
    description: string;
    price: number;
    imageUrl: string;
  }
  
  export interface ButtonProps {
    label: string;
    onClick: () => void;
  }
  
  export interface Listing {
    id: number;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
  }
  
  export interface User {
    id: number;
    name: string;
    email: string;
  }
  export interface PropertyProps {
    name: string;
    address: {
      state: string;
      city: string;
      country: string;
    };
    rating: number;
    category: string[];
    price: number;
    offers: {
      bed: string;
      shower: string;
      occupants: string;
    };
    image: string;
    discount: string;
  }
  
  export interface FilterProps {
    label: string;
    active: boolean;
  }