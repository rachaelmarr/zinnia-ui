import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PhotoGalleryProps {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
  vendorName: string;
}

export default function PhotoGallery({ images, initialIndex = 0, onClose, vendorName }: PhotoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-black bg-opacity-50">
        <div className="flex items-center gap-3">
          <h2 className="font-['Literata:SemiBold',_sans-serif] font-semibold text-white text-lg">
            {vendorName}
          </h2>
          <span className="text-white text-sm opacity-75">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      {/* Main Photo Display */}
      <div className="flex-1 flex items-center justify-center relative px-4 py-2">
        {/* Navigation Arrows - Hidden on Mobile */}
        <button
          onClick={goToPrevious}
          className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 p-3 text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-colors z-10"
        >
          <ChevronLeft size={32} />
        </button>

        <button
          onClick={goToNext}
          className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 p-3 text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-colors z-10"
        >
          <ChevronRight size={32} />
        </button>

        {/* Current Image */}
        <div className="w-full h-full max-w-4xl max-h-full flex items-center justify-center">
          <ImageWithFallback
            src={images[currentIndex]}
            alt={`${vendorName} gallery ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      </div>

      {/* Mobile Thumbnails Strip */}
      <div className="md:hidden">
        <div className="flex gap-2 p-4 overflow-x-auto scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                index === currentIndex 
                  ? 'border-white' 
                  : 'border-transparent opacity-60'
              }`}
            >
              <ImageWithFallback
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Thumbnails Strip */}
      <div className="hidden md:block">
        <div className="flex justify-center gap-3 p-6 bg-black bg-opacity-50">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                index === currentIndex 
                  ? 'border-white' 
                  : 'border-transparent opacity-60 hover:opacity-80'
              }`}
            >
              <ImageWithFallback
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Swipe Gesture Areas */}
      <div className="md:hidden absolute inset-0 flex">
        {/* Left swipe area */}
        <div 
          className="flex-1 cursor-pointer"
          onClick={goToPrevious}
        />
        {/* Right swipe area */}
        <div 
          className="flex-1 cursor-pointer"
          onClick={goToNext}
        />
      </div>
    </div>
  );
}