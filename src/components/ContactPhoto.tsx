interface ContactPhotoProps {
  imageUrl?: string | null;
  firstName: string;
  lastName: string;
  size: 'sm' | 'lg'; // sm = 28px (list view), lg = 90px (detail view)
  onClick?: () => void;
}

export default function ContactPhoto({ imageUrl, firstName, lastName, size, onClick }: ContactPhotoProps) {
  // Define exact pixel dimensions
  const dimensions = {
    sm: 28, // 28px
    lg: 90  // 90px
  };

  const textSizeClasses = {
    sm: 'text-xs', // 12px for small avatars
    lg: 'text-2xl' // 24px for large avatars
  };

  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  const pixelSize = dimensions[size];

  // Use inline styles to ensure perfect circle
  const circleStyles = {
    width: `${pixelSize}px`,
    height: `${pixelSize}px`,
    borderRadius: '50%',
    overflow: 'hidden',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imageStyles = {
    ...circleStyles,
    backgroundImage: `url('${imageUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  const fallbackStyles = {
    ...circleStyles,
    backgroundColor: '#2f7685'
  };

  if (imageUrl) {
    return (
      <div 
        style={imageStyles}
        className={`${onClick ? 'cursor-pointer hover:opacity-90' : ''}`}
        onClick={onClick}
      />
    );
  }

  return (
    <div 
      style={fallbackStyles}
      className={`${onClick ? 'cursor-pointer hover:opacity-90' : ''}`}
      onClick={onClick}
    >
      <span className={`text-white font-medium ${textSizeClasses[size]}`}>
        {initials}
      </span>
    </div>
  );
}