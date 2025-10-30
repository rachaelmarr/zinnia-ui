import React from 'react';
import { X, MessageSquare } from 'lucide-react';

interface Template {
  id: string;
  title: string;
  content: string;
  category: string;
}

interface TemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTemplate: (template: Template) => void;
  templates: Template[];
}

export default function TemplateModal({
  isOpen,
  onClose,
  onSelectTemplate,
  templates
}: TemplateModalProps) {
  if (!isOpen) return null;

  const categories = [...new Set(templates.map(t => t.category))];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-6 h-6 text-[#2f7685]" />
            <h2 className="text-xl font-semibold text-[#47567B]" style={{ fontFamily: 'Literata, serif' }}>
              Message Templates
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {categories.map((category) => (
            <div key={category} className="mb-6">
              <h3 className="text-lg font-medium text-[#47567B] mb-3" style={{ fontFamily: 'Literata, serif' }}>
                {category}
              </h3>
              <div className="space-y-3">
                {templates
                  .filter(template => template.category === category)
                  .map((template) => (
                    <div
                      key={template.id}
                      onClick={() => onSelectTemplate(template)}
                      className="p-4 border border-gray-200 rounded-lg hover:border-[#2f7685] hover:bg-[#f0f9ff] cursor-pointer transition-colors"
                    >
                      <h4 className="font-medium text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {template.title}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {template.content}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}







