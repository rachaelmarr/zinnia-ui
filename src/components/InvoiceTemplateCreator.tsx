import { useState, useEffect } from "react";
import { ArrowLeft, Plus, Trash2, Save } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { toast } from "sonner@2.0.3";
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface InvoiceTemplateCreatorProps {
  onNavigate: (view: string) => void;
  onBack: () => void;
}

interface ServiceItem {
  id: string;
  description: string;
  amount: number;
  quantity: number;
}

interface TemplateData {
  name: string;
  description: string;
  services: ServiceItem[];
  footer: string;
  dueInDays: number;
}

export default function InvoiceTemplateCreator({ onNavigate, onBack }: InvoiceTemplateCreatorProps) {
  const [templateData, setTemplateData] = useState<TemplateData>({
    name: '',
    description: '',
    services: [
      { id: '1', description: '', amount: 0, quantity: 1 }
    ],
    footer: 'Thank you for your business!',
    dueInDays: 30
  });
  
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const addService = () => {
    const newService: ServiceItem = {
      id: Date.now().toString(),
      description: '',
      amount: 0,
      quantity: 1
    };
    setTemplateData(prev => ({
      ...prev,
      services: [...prev.services, newService]
    }));
  };

  const removeService = (id: string) => {
    if (templateData.services.length > 1) {
      setTemplateData(prev => ({
        ...prev,
        services: prev.services.filter(service => service.id !== id)
      }));
    }
  };

  const updateService = (id: string, field: keyof ServiceItem, value: string | number) => {
    setTemplateData(prev => ({
      ...prev,
      services: prev.services.map(service =>
        service.id === id ? { ...service, [field]: value } : service
      )
    }));
  };

  const calculateTotal = () => {
    return templateData.services.reduce((total, service) => {
      return total + (service.amount * service.quantity);
    }, 0);
  };

  const handleSaveTemplate = async () => {
    if (!templateData.name.trim()) {
      toast.error('Please enter a template name');
      return;
    }

    if (templateData.services.some(service => !service.description.trim())) {
      toast.error('Please fill in all service descriptions');
      return;
    }

    setSaving(true);
    
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-6e4d8724/invoice-templates`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify(templateData)
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Failed to save template: ${errorData}`);
      }

      const result = await response.json();
      toast.success('Invoice template created successfully!');
      onBack();
    } catch (error) {
      console.error('Error saving template:', error);
      toast.error('Failed to save template. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#f0f5fa] overflow-auto">
      <div className="min-h-screen">
        {/* Header */}
        <div className="bg-white border-b border-[#e5e7eb] px-4 py-4">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onBack}
                className="p-2 hover:bg-gray-100"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="font-['Literata:SemiBold',_sans-serif] font-semibold text-[#47567b] text-[24px] md:text-[28px]">
                  Create Invoice Template
                </h1>
                <p className="font-['Montserrat:Regular',_sans-serif] text-[#47567b] text-[14px] mt-1">
                  Design a reusable template for quick invoicing
                </p>
              </div>
            </div>
            <Button 
              onClick={handleSaveTemplate}
              disabled={saving}
              className="bg-[#2f7685] hover:bg-[#2f7685]/90 text-white"
            >
              {saving ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Template
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Template Settings */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-['Literata:SemiBold',_sans-serif] text-[#47567b] text-[18px]">
                    Template Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="font-['Literata:Medium',_sans-serif] font-medium text-[#47567b] text-[14px] block mb-2">
                      Template Name
                    </label>
                    <Input
                      value={templateData.name}
                      onChange={(e) => setTemplateData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="e.g., Wedding Photography Package"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="font-['Literata:Medium',_sans-serif] font-medium text-[#47567b] text-[14px] block mb-2">
                      Description
                    </label>
                    <Textarea
                      value={templateData.description}
                      onChange={(e) => setTemplateData(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Brief description of your services..."
                      className="w-full min-h-[80px]"
                    />
                  </div>

                  <div>
                    <label className="font-['Literata:Medium',_sans-serif] font-medium text-[#47567b] text-[14px] block mb-2">
                      Payment Due (Days)
                    </label>
                    <Input
                      type="number"
                      value={templateData.dueInDays}
                      onChange={(e) => setTemplateData(prev => ({ ...prev, dueInDays: parseInt(e.target.value) || 30 }))}
                      className="w-full"
                      min="1"
                      max="365"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-['Literata:SemiBold',_sans-serif] text-[#47567b] text-[18px] flex items-center justify-between">
                    Services & Pricing
                    <Button 
                      onClick={addService}
                      size="sm"
                      variant="outline"
                      className="text-[#2f7685] border-[#2f7685] hover:bg-[#2f7685] hover:text-white"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Add Service
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {templateData.services.map((service, index) => (
                    <div key={service.id} className="border border-[#e5e7eb] rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-['Montserrat:Medium',_sans-serif] font-medium text-[#47567b] text-[14px]">
                          Service {index + 1}
                        </span>
                        {templateData.services.length > 1 && (
                          <Button
                            onClick={() => removeService(service.id)}
                            size="sm"
                            variant="ghost"
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                      
                      <div className="space-y-3">
                        <Input
                          value={service.description}
                          onChange={(e) => updateService(service.id, 'description', e.target.value)}
                          placeholder="Service description"
                          className="w-full"
                        />
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="font-['Montserrat:Regular',_sans-serif] text-[#47567b] text-[12px] block mb-1">
                              Quantity
                            </label>
                            <Input
                              type="number"
                              value={service.quantity}
                              onChange={(e) => updateService(service.id, 'quantity', parseInt(e.target.value) || 1)}
                              min="1"
                              className="w-full"
                            />
                          </div>
                          <div>
                            <label className="font-['Montserrat:Regular',_sans-serif] text-[#47567b] text-[12px] block mb-1">
                              Amount ($)
                            </label>
                            <Input
                              type="number"
                              value={service.amount}
                              onChange={(e) => updateService(service.id, 'amount', parseFloat(e.target.value) || 0)}
                              min="0"
                              step="0.01"
                              className="w-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-['Literata:SemiBold',_sans-serif] text-[#47567b] text-[18px]">
                    Invoice Footer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={templateData.footer}
                    onChange={(e) => setTemplateData(prev => ({ ...prev, footer: e.target.value }))}
                    placeholder="Thank you message, payment terms, etc."
                    className="w-full min-h-[80px]"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Preview */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-['Literata:SemiBold',_sans-serif] text-[#47567b] text-[18px]">
                    Template Preview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-white border border-[#e5e7eb] rounded-lg p-6 space-y-4">
                    {/* Template Header */}
                    <div className="text-center pb-4 border-b border-[#e5e7eb]">
                      <h2 className="font-['Literata:SemiBold',_sans-serif] font-semibold text-[#47567b] text-[20px]">
                        {templateData.name || 'Template Name'}
                      </h2>
                      {templateData.description && (
                        <p className="font-['Montserrat:Regular',_sans-serif] text-[#47567b] text-[14px] mt-2">
                          {templateData.description}
                        </p>
                      )}
                    </div>

                    {/* Services */}
                    <div className="space-y-3">
                      <h3 className="font-['Literata:Medium',_sans-serif] font-medium text-[#47567b] text-[16px]">
                        Services
                      </h3>
                      {templateData.services.map((service, index) => (
                        <div key={service.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                          <div className="flex-1">
                            <p className="font-['Montserrat:Regular',_sans-serif] text-[#47567b] text-[14px]">
                              {service.description || `Service ${index + 1}`}
                            </p>
                            <p className="font-['Montserrat:Regular',_sans-serif] text-[#47567b] text-[12px] text-gray-500">
                              Qty: {service.quantity}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-['Montserrat:Medium',_sans-serif] font-medium text-[#47567b] text-[14px]">
                              ${(service.amount * service.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Separator />

                    {/* Total */}
                    <div className="flex justify-between items-center pt-2">
                      <span className="font-['Literata:SemiBold',_sans-serif] font-semibold text-[#47567b] text-[16px]">
                        Total
                      </span>
                      <span className="font-['Literata:SemiBold',_sans-serif] font-semibold text-[#47567b] text-[16px]">
                        ${calculateTotal().toFixed(2)}
                      </span>
                    </div>

                    {/* Payment Terms */}
                    <div className="pt-4 border-t border-[#e5e7eb]">
                      <p className="font-['Montserrat:Regular',_sans-serif] text-[#47567b] text-[12px] text-gray-500">
                        Payment due in {templateData.dueInDays} days
                      </p>
                    </div>

                    {/* Footer */}
                    {templateData.footer && (
                      <div className="pt-2">
                        <p className="font-['Montserrat:Regular',_sans-serif] text-[#47567b] text-[12px] text-gray-600 text-center">
                          {templateData.footer}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}