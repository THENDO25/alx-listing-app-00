import Image from 'next/image'; // Ensure you're importing the Image component correctly
import { PropertyProps } from '../interfaces';

const PropertyCard = ({ property }: { property: PropertyProps }) => {
  return (
    <div className="property-card">
      <Image
        src={property.image}
        alt={property.name}
        width={400}
        height={300}
        style={{ objectFit: 'cover' }} // Add this to prevent image stretching
      />
      <div className="property-content">
        <h2>{property.name}</h2>
        <p>Price: ${property.price.toLocaleString()}</p> // Format price with commas
        <p>Rating: {property.rating}/5</p>
      </div>
    </div>
  );
};

export default PropertyCard;