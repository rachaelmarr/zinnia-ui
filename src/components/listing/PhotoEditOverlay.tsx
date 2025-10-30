import { useState } from "react";
import { X, RotateCcw, Save } from "lucide-react";

interface PhotoEditOverlayProps {
  photoUrl: string;
  photoIndex: number;
  onClose: () => void;
  onSave: (editData: { scale: number, offset: { x: number, y: number } }) => void;
  existingEdit?: { scale: number, offset: { x: number, y: number } };
}

export default function PhotoEditOverlay({ 
  photoUrl, 
  photoIndex, 
  onClose, 
  onSave, 
  existingEdit 
}: PhotoEditOverlayProps) {
  const [scale, setScale] = useState(existingEdit?.scale || 0.25);
  const [offset, setOffset] = useState(existingEdit?.offset || { x: 0, y: 0 });

  const handleSave = () => {
    onSave({ scale, offset });
    onClose();
  };

  const handleReset = () => {
    setScale(0.25);
    setOffset({ x: 0, y: 0 });
  };

  const handleSliderChange = (value: number) => {
    setScale(value / 100);
  };

  const handleDrag = (e: React.MouseEvent) => {
    const startX = e.clientX - offset.x;
    const startY = e.clientY - offset.y;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      setOffset({
        x: moveEvent.clientX - startX,
        y: moveEvent.clientY - startY
      });
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      {/* Overlay Content */}
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-[#47567B]" style={{ fontFamily: 'Literata, serif' }}>
            Edit Photo
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-[#47567B]" />
          </button>
        </div>

        {/* Photo Preview Area */}
        <div className="p-6">
          <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-6" style={{ height: '400px' }}>
            <div
              className="absolute inset-0 bg-center bg-cover bg-no-repeat cursor-move"
              style={{
                backgroundImage: `url('${photoUrl}')`,
                transform: `scale(${1 + scale}) translate(${offset.x}px, ${offset.y}px)`,
                transition: 'transform 0.1s ease-out'
              }}
              onMouseDown={handleDrag}
            />
            
            {/* Grid overlay for alignment */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="grid grid-cols-3 h-full">
                <div className="border-r border-gray-400"></div>
                <div className="border-r border-gray-400"></div>
                <div></div>
              </div>
              <div className="grid grid-rows-3 h-full absolute inset-0">
                <div className="border-b border-gray-400"></div>
                <div className="border-b border-gray-400"></div>
                <div></div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-4">
            {/* Scale Control */}
            <div>
              <label className="block text-sm font-medium text-[#47567B] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Zoom: {Math.round((1 + scale) * 100)}%
              </label>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>50%</span>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={Math.round(scale * 100)}
                  onChange={(e) => handleSliderChange(parseInt(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <span className="text-sm text-gray-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>300%</span>
              </div>
            </div>

            {/* Position Controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handleReset}
                className="flex items-center space-x-2 px-4 py-2 text-sm text-[#47567B] border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <RotateCcw size={16} />
                <span>Reset</span>
              </button>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-[#47567B]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <strong>Instructions:</strong> Drag the image to reposition it, use the zoom slider to adjust size, and click Reset to restore original settings.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end space-x-3 p-4 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="px-6 py-2 text-[#47567B] border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex items-center space-x-2 px-6 py-2 bg-[#47567B] text-white rounded-lg hover:bg-[#3a4a68] transition-colors"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <Save size={16} />
            <span>Save Changes</span>
          </button>
        </div>
      </div>
    </div>
  );
}












