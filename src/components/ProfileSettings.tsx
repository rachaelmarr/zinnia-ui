import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { X, Upload, Trash2, User } from "lucide-react";

export default function ProfileSettings() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profilePic, setProfilePic] = useState("https://placehold.co/150x150/0891b2/ffffff?text=MB");
  const [newPic, setNewPic] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setNewPic(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        setNewPic(URL.createObjectURL(file));
      }
    }
  };

  const handleSave = () => {
    if (newPic) {
      setProfilePic(newPic);
      setNewPic(null);
    }
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    setProfilePic("https://placehold.co/150x150/0891b2/ffffff?text=MB");
    setNewPic(null);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setNewPic(null);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold font-['Literata'] text-[#47567B] mb-6">
        Profile Settings
      </h1>

      {/* Profile Card */}
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-['Literata'] text-[#47567B]">
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Profile Picture Section */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={profilePic}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border-4 border-slate-200"
              />
            </div>
            <Button
              onClick={() => setIsModalOpen(true)}
              variant="outline"
              size="sm"
              className="font-['Montserrat']"
            >
              Edit picture
            </Button>
          </div>

          {/* Form fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium font-['Montserrat'] text-[#47567B] mb-2">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Millie Bland"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:border-transparent font-['Montserrat']"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium font-['Montserrat'] text-[#47567B] mb-2">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="coupleemail@gmail.com"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:border-transparent font-['Montserrat']"
              />
            </div>

            <div>
              <label className="block text-sm font-medium font-['Montserrat'] text-[#47567B] mb-2">
                Partner's Name
              </label>
              <input
                type="text"
                defaultValue="John Smith"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:border-transparent font-['Montserrat']"
              />
            </div>
          </div>

          {/* Password Section */}
          <div className="border-t border-slate-200 pt-6">
            <h3 className="text-lg font-semibold font-['Literata'] text-[#47567B] mb-4">
              Change Password
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium font-['Montserrat'] text-[#47567B] mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:border-transparent font-['Montserrat']"
                />
              </div>
              <div>
                <label className="block text-sm font-medium font-['Montserrat'] text-[#47567B] mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:border-transparent font-['Montserrat']"
                />
              </div>
              <div>
                <label className="block text-sm font-medium font-['Montserrat'] text-[#47567B] mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:border-transparent font-['Montserrat']"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button variant="primary" className="font-['Montserrat']">
              Save Changes
            </Button>
            <Button variant="outline" className="font-['Montserrat']">
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Profile Picture Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4 relative">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-['Literata'] text-[#47567B]">
                  Edit Profile Picture
                </CardTitle>
                <button
                  onClick={handleCancel}
                  className="p-1 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Current Profile Picture */}
              <div className="flex justify-center">
                <img
                  src={newPic || profilePic}
                  alt="Profile Preview"
                  className="w-24 h-24 rounded-full object-cover border-4 border-slate-200"
                />
              </div>

              {/* Drag and Drop Area */}
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  isDragOver 
                    ? 'border-cyan-500 bg-cyan-50' 
                    : 'border-slate-300 hover:border-slate-400'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-sm text-[#47567B] font-['Montserrat'] mb-2">
                  Drag and drop an image here, or
                </p>
                <label className="cursor-pointer">
                  <Button variant="outline" size="sm" className="font-['Montserrat']">
                    Choose file
                  </Button>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between gap-3">
                <Button
                  onClick={handleDelete}
                  variant="ghost"
                  className="text-red-600 hover:text-red-700 hover:bg-red-50 font-['Montserrat']"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
                
                <div className="flex gap-2">
                  <Button
                    onClick={handleCancel}
                    variant="outline"
                    className="font-['Montserrat']"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSave}
                    variant="primary"
                    className="font-['Montserrat']"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
