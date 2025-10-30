import { useState } from "react";
import svgPaths from "../../imports/svg-z2ii8qmo0x";
import PhotoEditOverlay from "./PhotoEditOverlay";

interface PhotographerServiceProps {
  onNavigate: (view: string) => void;
  onBack: () => void;
  onNext: (data: any) => void;
  initialData?: any;
}

export default function PhotographerService({ onNavigate, onBack, onNext, initialData }: PhotographerServiceProps) {
  const [formData, setFormData] = useState({
    serviceName: initialData?.serviceName || "Wedding photography",
    type: initialData?.type || "Wedding day",
    hours: initialData?.hours || "5",
    description: initialData?.description || "",
    serviceLocation: initialData?.serviceLocation || "mobile",
    travelRadius: initialData?.travelRadius || "50 miles",
    price: initialData?.price || "300",
    included: initialData?.included || {
      ceremony: false,
      reception: false,
      bridalPortraits: false,
      firstLook: false,
      other: false
    },
    delivered: initialData?.delivered || {
      onlineGallery: false,
      photoAlbum: false,
      sameDayPrints: false,
      uneditedPhotos: false,
      highlightFilm: false,
      other: false
    },
    deliveryTime: initialData?.deliveryTime || "30 days"
  });

  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [showEditOverlay, setShowEditOverlay] = useState(false);
  const [photoEdits, setPhotoEdits] = useState<{[key: string]: { scale: number, offset: { x: number, y: number } }}>({});

  const handleLocationChange = (location: string) => {
    setFormData(prev => ({ ...prev, serviceLocation: location }));
  };

  const handleIncludedToggle = (item: string) => {
    setFormData(prev => ({
      ...prev,
      included: {
        ...prev.included,
        [item]: !prev.included[item]
      }
    }));
  };

  const handleDeliveredToggle = (item: string) => {
    setFormData(prev => ({
      ...prev,
      delivered: {
        ...prev.delivered,
        [item]: !prev.delivered[item]
      }
    }));
  };

  const handleImageUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file && file.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(file);
        setUploadedImage(imageUrl);
      }
    };
    input.click();
  };

  const handleImageDelete = () => {
    if (uploadedImage) {
      URL.revokeObjectURL(uploadedImage);
      setUploadedImage(null);
    }
  };

  const handleEditPhoto = () => {
    setShowEditOverlay(true);
  };

  const handleCloseEditOverlay = () => {
    setShowEditOverlay(false);
  };

  const handleSavePhotoEdit = (editData: { scale: number, offset: { x: number, y: number } }) => {
    const editKey = `${uploadedImage}_0`;
    setPhotoEdits(prev => ({
      ...prev,
      [editKey]: editData
    }));
  };

  const handleSubmit = () => {
    onNext(formData);
  };

  const typeOptions = [
    { value: "Wedding day", label: "Wedding day" },
    { value: "Engagement", label: "Engagement" },
    { value: "Bridal portraits", label: "Bridal portraits" }
  ];

  const locationOptions = [
    { value: "mobile", label: "Mobile" },
    { value: "studio", label: "Studio" }
  ];

  const travelRadiusOptions = [
    { value: "25 miles", label: "25 miles" },
    { value: "50 miles", label: "50 miles" },
    { value: "100 miles", label: "100 miles" },
    { value: "200 miles", label: "200 miles" }
  ];

  const deliveryTimeOptions = [
    { value: "7 days", label: "7 days" },
    { value: "14 days", label: "14 days" },
    { value: "30 days", label: "30 days" },
    { value: "60 days", label: "60 days" },
    { value: "90 days", label: "90 days" }
  ];

  return (
    <div className="bg-white overflow-hidden relative rounded-xl size-full min-h-screen">
      {/* Close button */}
      <button 
        onClick={onBack}
        className="absolute right-6 top-6 z-10 p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <svg className="size-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d="M6 6L18 18M6 18L18 6L6 18Z" stroke="#47567B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>

      {/* Step indicator - Step 4 of 4 */}
      <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 flex items-center justify-center h-[100px]">
        <div className="flex items-center space-x-8">
          {/* Steps 1-3 - Completed */}
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div className="w-[154.84px] h-[46.726px] relative mb-4">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 45">
                  <path d="M69.0738 29.8086C68.9915 29.6989 68.9428 29.6135 68.8757 29.5495C67.9006 28.5622 66.9193 27.5809 65.9502 26.5875C63.1436 23.7168 60.791 20.4957 58.6304 17.1253C58.2372 16.5127 57.9081 15.8545 57.6095 15.1902C56.1924 12.0453 56.5825 8.96128 58.027 5.95044C58.7157 4.51207 59.7823 3.39367 61.1414 2.54344C63.0704 1.33362 65.164 0.669288 67.4343 0.69062C70.8931 0.721094 73.2427 2.62877 74.8426 5.48419C75.9945 7.54119 76.5552 9.82979 76.668 12.2007C76.8356 15.7692 76.22 19.2402 75.2204 22.6472C74.7633 24.2044 73.9558 25.5971 73.0629 26.941C72.4717 27.8308 71.8591 28.7085 71.2192 29.644C72.9349 31.5791 75.0102 33.1242 76.8599 34.9617C78.859 32.8255 81.2116 31.1464 83.1406 28.9858C82.9913 28.7633 82.8755 28.5805 82.7475 28.4068C79.6178 24.1008 78.7828 22.0651 77.9875 16.8022C77.6065 14.282 77.4755 11.7618 77.9814 9.24164C78.2709 7.80326 78.6792 6.38927 79.3619 5.09412C80.7606 2.43983 82.8176 0.580914 85.8833 0.0933288C87.3034 -0.132179 88.7113 0.0719971 90.0735 0.480349C92.6485 1.25134 94.8792 2.55258 96.1774 5.02098C98.0546 8.59254 98.1796 12.1946 96.147 15.7631C95.6655 16.6072 95.1413 17.4361 94.5776 18.2284C92.9533 20.5109 91.3595 22.8178 89.4152 24.8474C88.1201 26.2035 86.8006 27.5352 85.4902 28.8791C85.4262 28.9462 85.3713 29.0254 85.2708 29.1503C85.4597 29.3515 85.6334 29.5495 85.8163 29.7324C88.0226 31.9143 90.6129 33.5477 93.3555 34.9556C97.1069 36.8786 101.075 38.195 105.198 39.0422C106.746 39.3591 108.309 39.609 109.876 39.8406C112.694 40.2581 115.516 40.6543 118.341 41.0261C122.132 41.5258 125.923 42.0287 129.72 42.4644C131.192 42.6321 132.685 42.6564 134.169 42.693C137.043 42.76 139.917 42.8058 142.791 42.8301C144.299 42.8423 145.655 43.0191 147.167 43.013C148.212 43.0099 149.333 43.2354 150.379 43.2415C150.915 43.2415 152.237 43.3634 152.774 43.3665C153.283 43.3695 154.334 43.4213 154.84 43.4853L154.813 44.6769C154.124 44.7378 153.52 44.7317 152.82 44.7409C149.019 44.7835 144.515 44.2655 140.715 44.2472C137.72 44.2319 134.724 44.1131 131.728 44.0552C129.309 44.0095 126.929 43.6133 124.54 43.2872C121.91 42.9276 119.274 42.6138 116.644 42.2603C113.484 41.8367 110.305 41.4923 107.166 40.9346C100.959 39.8315 95.0255 37.9147 89.6377 34.5321C87.794 33.374 86.0601 32.0819 84.5394 30.5186C84.4541 30.4302 84.3657 30.348 84.2743 30.2687C84.2408 30.2413 84.1889 30.2322 84.1006 30.1986C83.9909 30.2901 83.8598 30.3937 83.7379 30.5064C81.9522 32.1642 80.1725 33.8251 78.3836 35.4798C78.0637 35.7754 77.7163 36.0436 77.3689 36.3117C76.9788 36.6165 76.6405 36.6226 76.2291 36.3361C76.0707 36.2264 75.9305 36.0862 75.7903 35.9521C74.0045 34.2944 72.2218 32.6366 70.436 30.9818C70.3842 30.9331 70.3172 30.9056 70.2166 30.8447C70.113 30.93 69.9941 31.0062 69.8966 31.1037C67.5196 33.5416 64.7008 35.3518 61.6961 36.8968C57.8807 38.8563 53.8429 40.1819 49.6588 41.0992C47.8486 41.4954 46.0293 41.794 44.1857 42.0104C41.8422 42.2877 39.5109 42.6808 37.1675 42.9977C34.1993 43.4 31.219 43.7261 28.2599 44.174C24.9962 44.6677 21.7141 44.8049 18.4259 44.8231C13.5806 44.8506 8.73215 44.8445 3.88373 44.8323C2.81409 44.8323 1.74445 44.7622 0.674814 44.7165C0.348741 44.7043 0.0257167 44.6708 0.00133747 44.2289C-0.016947 43.8632 0.15066 43.6194 0.601676 43.5371C1.02831 43.4579 1.47019 43.4305 1.90597 43.4335C8.60416 43.4853 15.3024 43.4823 21.9975 43.2812C24.021 43.2202 26.0292 43.013 28.0344 42.7265C31.0239 42.2999 34.0226 41.9464 37.0151 41.5441C40.224 41.1144 43.4482 40.7579 46.6358 40.2063C52.8769 39.1275 58.8345 37.2199 64.2223 33.7763C65.7857 32.7767 67.2667 31.6705 68.5801 30.351C68.7477 30.1804 68.9062 30.0006 69.0769 29.8116L69.0738 29.8086Z" fill="#47567B" />
                </svg>
                <svg className="absolute top-0 left-[39.88%] right-[38.05%] bottom-[18.63%] block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 39">
                  <path d="M14.0475 15.7752C14.6296 14.0961 14.142 12.228 13.3832 10.619C12.4416 8.62598 11.0093 6.77011 9.01322 5.83455C7.01717 4.899 4.4025 5.09403 2.88489 6.69392C1.50747 8.14753 1.30634 10.3813 1.68726 12.3469C2.51921 16.6254 5.60928 20.0568 8.5744 23.2505C12.213 27.1694 15.8516 31.0884 19.4872 35.0043" fill="#CCD7E6" />
                  <path d="M15.361 17.3111C16.778 12.2889 14.4315 5.20676 9.41548 2.89683C7.43162 1.98261 4.93579 1.95518 3.09516 3.2229C0.913215 4.72223 0.126985 7.50451 0.0142308 10.0217C-0.235656 15.6258 2.84222 20.3828 6.43512 24.3902C10.4546 28.8729 14.6235 33.2276 18.7192 37.6372C19.6487 38.6398 20.5263 37.4696 20.8036 36.5432C21.1632 35.3425 21.1846 33.3709 20.2581 32.3744C17.293 29.1807 14.3309 25.9901 11.3658 22.7964C8.7999 20.0324 5.87439 17.2958 4.1069 13.9193C3.58274 12.9167 2.7508 11.3686 3.10125 10.1954C3.52484 8.78746 5.30758 8.29378 6.59663 8.31816C8.18128 8.35168 9.60442 9.13182 10.6649 10.2837C11.3841 11.0639 13.0419 13.13 12.7311 14.2332C12.3897 15.4399 12.3105 17.433 13.2765 18.402C14.2426 19.3711 15.0867 18.2862 15.361 17.308V17.3111Z" fill="#CCD7E6" />
                  <path d="M20.5355 37.5763C24.1863 34.084 27.6633 30.29 30.5584 26.1424C33.4534 21.9949 34.261 16.6894 34.1604 11.6764C34.072 7.15405 32.1735 2.6317 27.7852 0.763645C23.787 -0.936807 19.347 0.330913 16.3148 3.29604C12.3014 7.21805 11.6889 13.5048 12.9109 18.7068C13.1486 19.7155 14.0658 20.715 14.9953 19.8008C15.9826 18.8287 15.8211 16.8265 15.5408 15.6319C13.6179 7.43441 26.6608 2.11365 30.6346 9.79615C31.5031 11.4753 31.0521 13.6359 30.854 15.4278C30.6071 17.6706 30.0586 19.4564 28.7208 21.3001C25.844 25.2678 22.5346 28.9308 18.9965 32.3134C17.613 33.6391 18.5211 39.5023 20.5355 37.5763Z" fill="#CCD7E6" />
                </svg>
              </div>
              <div className="font-['Literata'] font-light text-[14px] text-[#47567b] uppercase tracking-[0.28px] leading-[1.5]">
                {step}. {step === 1 ? 'Add photos' : step === 2 ? 'Business hours' : 'Description'}
              </div>
            </div>
          ))}

          {/* Step 4 - Active */}
          <div className="flex flex-col items-center">
            <div className="w-[154.84px] h-[46.726px] relative mb-4">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 45">
                <path d="M69.0738 29.8086C68.9915 29.6989 68.9428 29.6135 68.8757 29.5495C67.9006 28.5622 66.9193 27.5809 65.9502 26.5875C63.1436 23.7168 60.791 20.4957 58.6304 17.1253C58.2372 16.5127 57.9081 15.8545 57.6095 15.1902C56.1924 12.0453 56.5825 8.96128 58.027 5.95044C58.7157 4.51207 59.7823 3.39367 61.1414 2.54344C63.0704 1.33362 65.164 0.669288 67.4343 0.69062C70.8931 0.721094 73.2427 2.62877 74.8426 5.48419C75.9945 7.54119 76.5552 9.82979 76.668 12.2007C76.8356 15.7692 76.22 19.2402 75.2204 22.6472C74.7633 24.2044 73.9558 25.5971 73.0629 26.941C72.4717 27.8308 71.8591 28.7085 71.2192 29.644C72.9349 31.5791 75.0102 33.1242 76.8599 34.9617C78.859 32.8255 81.2116 31.1464 83.1406 28.9858C82.9913 28.7633 82.8755 28.5805 82.7475 28.4068C79.6178 24.1008 78.7828 22.0651 77.9875 16.8022C77.6065 14.282 77.4755 11.7618 77.9814 9.24164C78.2709 7.80326 78.6792 6.38927 79.3619 5.09412C80.7606 2.43983 82.8176 0.580914 85.8833 0.0933288C87.3034 -0.132179 88.7113 0.0719971 90.0735 0.480349C92.6485 1.25134 94.8792 2.55258 96.1774 5.02098C98.0546 8.59254 98.1796 12.1946 96.147 15.7631C95.6655 16.6072 95.1413 17.4361 94.5776 18.2284C92.9533 20.5109 91.3595 22.8178 89.4152 24.8474C88.1201 26.2035 86.8006 27.5352 85.4902 28.8791C85.4262 28.9462 85.3713 29.0254 85.2708 29.1503C85.4597 29.3515 85.6334 29.5495 85.8163 29.7324C88.0226 31.9143 90.6129 33.5477 93.3555 34.9556C97.1069 36.8786 101.075 38.195 105.198 39.0422C106.746 39.3591 108.309 39.609 109.876 39.8406C112.694 40.2581 115.516 40.6543 118.341 41.0261C122.132 41.5258 125.923 42.0287 129.72 42.4644C131.192 42.6321 132.685 42.6564 134.169 42.693C137.043 42.76 139.917 42.8058 142.791 42.8301C144.299 42.8423 145.655 43.0191 147.167 43.013C148.212 43.0099 149.333 43.2354 150.379 43.2415C150.915 43.2415 152.237 43.3634 152.774 43.3665C153.283 43.3695 154.334 43.4213 154.84 43.4853L154.813 44.6769C154.124 44.7378 153.52 44.7317 152.82 44.7409C149.019 44.7835 144.515 44.2655 140.715 44.2472C137.72 44.2319 134.724 44.1131 131.728 44.0552C129.309 44.0095 126.929 43.6133 124.54 43.2872C121.91 42.9276 119.274 42.6138 116.644 42.2603C113.484 41.8367 110.305 41.4923 107.166 40.9346C100.959 39.8315 95.0255 37.9147 89.6377 34.5321C87.794 33.374 86.0601 32.0819 84.5394 30.5186C84.4541 30.4302 84.3657 30.348 84.2743 30.2687C84.2408 30.2413 84.1889 30.2322 84.1006 30.1986C83.9909 30.2901 83.8598 30.3937 83.7379 30.5064C81.9522 32.1642 80.1725 33.8251 78.3836 35.4798C78.0637 35.7754 77.7163 36.0436 77.3689 36.3117C76.9788 36.6165 76.6405 36.6226 76.2291 36.3361C76.0707 36.2264 75.9305 36.0862 75.7903 35.9521C74.0045 34.2944 72.2218 32.6366 70.436 30.9818C70.3842 30.9331 70.3172 30.9056 70.2166 30.8447C70.113 30.93 69.9941 31.0062 69.8966 31.1037C67.5196 33.5416 64.7008 35.3518 61.6961 36.8968C57.8807 38.8563 53.8429 40.1819 49.6588 41.0992C47.8486 41.4954 46.0293 41.794 44.1857 42.0104C41.8422 42.2877 39.5109 42.6808 37.1675 42.9977C34.1993 43.4 31.219 43.7261 28.2599 44.174C24.9962 44.6677 21.7141 44.8049 18.4259 44.8231C13.5806 44.8506 8.73215 44.8445 3.88373 44.8323C2.81409 44.8323 1.74445 44.7622 0.674814 44.7165C0.348741 44.7043 0.0257167 44.6708 0.00133747 44.2289C-0.016947 43.8632 0.15066 43.6194 0.601676 43.5371C1.02831 43.4579 1.47019 43.4305 1.90597 43.4335C8.60416 43.4853 15.3024 43.4823 21.9975 43.2812C24.021 43.2202 26.0292 43.013 28.0344 42.7265C31.0239 42.2999 34.0226 41.9464 37.0151 41.5441C40.224 41.1144 43.4482 40.7579 46.6358 40.2063C52.8769 39.1275 58.8345 37.2199 64.2223 33.7763C65.7857 32.7767 67.2667 31.6705 68.5801 30.351C68.7477 30.1804 68.9062 30.0006 69.0769 29.8116L69.0738 29.8086Z" fill="#47567B" />
              </svg>
              <svg className="absolute top-0 left-[39.88%] right-[38.05%] bottom-[18.63%] block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 39">
                <path d="M14.0475 15.7752C14.6296 14.0961 14.142 12.228 13.3832 10.619C12.4416 8.62598 11.0093 6.77011 9.01322 5.83455C7.01717 4.899 4.4025 5.09403 2.88489 6.69392C1.50747 8.14753 1.30634 10.3813 1.68726 12.3469C2.51921 16.6254 5.60928 20.0568 8.5744 23.2505C12.213 27.1694 15.8516 31.0884 19.4872 35.0043" fill="#667593" />
                <path d="M15.361 17.3111C16.778 12.2889 14.4315 5.20676 9.41548 2.89683C7.43162 1.98261 4.93579 1.95518 3.09516 3.2229C0.913215 4.72223 0.126985 7.50451 0.0142308 10.0217C-0.235656 15.6258 2.84222 20.3828 6.43512 24.3902C10.4546 28.8729 14.6235 33.2276 18.7192 37.6372C19.6487 38.6398 20.5263 37.4696 20.8036 36.5432C21.1632 35.3425 21.1846 33.3709 20.2581 32.3744C17.293 29.1807 14.3309 25.9901 11.3658 22.7964C8.7999 20.0324 5.87439 17.2958 4.1069 13.9193C3.58274 12.9167 2.7508 11.3686 3.10125 10.1954C3.52484 8.78746 5.30758 8.29378 6.59663 8.31816C8.18128 8.35168 9.60442 9.13182 10.6649 10.2837C11.3841 11.0639 13.0419 13.13 12.7311 14.2332C12.3897 15.4399 12.3105 17.433 13.2765 18.402C14.2426 19.3711 15.0867 18.2862 15.361 17.308V17.3111Z" fill="#667593" />
                <path d="M20.5355 37.5763C24.1863 34.084 27.6633 30.29 30.5584 26.1424C33.4534 21.9949 34.261 16.6894 34.1604 11.6764C34.072 7.15405 32.1735 2.6317 27.7852 0.763645C23.787 -0.936807 19.347 0.330913 16.3148 3.29604C12.3014 7.21805 11.6889 13.5048 12.9109 18.7068C13.1486 19.7155 14.0658 20.715 14.9953 19.8008C15.9826 18.8287 15.8211 16.8265 15.5408 15.6319C13.6179 7.43441 26.6608 2.11365 30.6346 9.79615C31.5031 11.4753 31.0521 13.6359 30.854 15.4278C30.6071 17.6706 30.0586 19.4564 28.7208 21.3001C25.844 25.2678 22.5346 28.9308 18.9965 32.3134C17.613 33.6391 18.5211 39.5023 20.5355 37.5763Z" fill="#667593" />
              </svg>
            </div>
            <div className="font-['Literata'] font-light text-[14px] text-[#47567b] uppercase tracking-[0.28px] leading-[1.5]">
              4. Service
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Photo Section */}
          <div className="p-6 border-b border-[#e5e7eb]">
            <h2 className="text-lg font-semibold text-[#47567b] mb-4" style={{ fontFamily: 'Literata, serif' }}>
              Add a photo
            </h2>
            <div className="relative">
              {uploadedImage ? (
                <div 
                  className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden cursor-pointer group"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <img 
                    src={uploadedImage} 
                    alt="Service photo" 
                    className="w-full h-full object-cover"
                    style={{
                      transform: photoEdits[`${uploadedImage}_0`] 
                        ? `scale(${1 + photoEdits[`${uploadedImage}_0`].scale}) translate(${photoEdits[`${uploadedImage}_0`].offset.x}px, ${photoEdits[`${uploadedImage}_0`].offset.y}px)` 
                        : undefined,
                    }}
                  />
                  {isHovering && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="flex gap-3">
                        <button
                          onClick={handleEditPhoto}
                          className="bg-white/90 backdrop-blur-sm hover:bg-white px-4 py-2 rounded-full text-[#47567b] text-sm font-medium transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={handleImageUpload}
                          className="bg-white/90 backdrop-blur-sm hover:bg-white px-4 py-2 rounded-full text-[#47567b] text-sm font-medium transition-colors"
                        >
                          Change
                        </button>
                        <button
                          onClick={handleImageDelete}
                          className="bg-red-500/90 backdrop-blur-sm hover:bg-red-600 px-4 py-2 rounded-full text-white text-sm font-medium transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div 
                  className="w-full h-64 bg-[#ccd7e6] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#b8c7d6] transition-colors"
                  onClick={handleImageUpload}
                >
                  <svg className="w-12 h-12 text-[#47567b] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-[#47567b] font-medium">Add a photo</p>
                </div>
              )}
            </div>
          </div>

          {/* Service Details */}
          <div className="p-6 space-y-6">
            {/* Service Name */}
            <div>
              <label className="block text-sm font-medium text-[#47567b] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Service name
              </label>
              <input
                type="text"
                value={formData.serviceName}
                onChange={(e) => setFormData(prev => ({ ...prev, serviceName: e.target.value }))}
                className="w-full px-4 py-3 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47567b] focus:border-transparent text-[#47567b]"
                placeholder="Enter service name"
              />
            </div>

            {/* Service Type */}
            <div>
              <label className="block text-sm font-medium text-[#47567b] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Service type
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                className="w-full px-4 py-3 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47567b] focus:border-transparent text-[#47567b]"
              >
                {typeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Hours */}
            <div>
              <label className="block text-sm font-medium text-[#47567b] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Hours
              </label>
              <input
                type="number"
                value={formData.hours}
                onChange={(e) => setFormData(prev => ({ ...prev, hours: e.target.value }))}
                className="w-full px-4 py-3 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47567b] focus:border-transparent text-[#47567b]"
                placeholder="5"
                min="1"
                max="24"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-[#47567b] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={4}
                className="w-full px-4 py-3 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47567b] focus:border-transparent text-[#47567b] resize-none"
                placeholder="Describe your photography services..."
              />
            </div>

            {/* Service Location */}
            <div>
              <label className="block text-sm font-medium text-[#47567b] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Service location
              </label>
              <div className="flex gap-4">
                {locationOptions.map((option) => (
                  <label key={option.value} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="serviceLocation"
                      value={option.value}
                      checked={formData.serviceLocation === option.value}
                      onChange={(e) => handleLocationChange(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`px-4 py-3 rounded-lg border-2 transition-colors ${
                      formData.serviceLocation === option.value
                        ? 'border-[#47567b] bg-[#47567b] text-white'
                        : 'border-[#8c97ac] text-[#47567b] hover:border-[#47567b]'
                    }`}>
                      {option.label}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Travel Radius */}
            <div>
              <label className="block text-sm font-medium text-[#47567b] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Travel radius
              </label>
              <select
                value={formData.travelRadius}
                onChange={(e) => setFormData(prev => ({ ...prev, travelRadius: e.target.value }))}
                className="w-full px-4 py-3 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47567b] focus:border-transparent text-[#47567b]"
              >
                {travelRadiusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-[#47567b] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Price
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#47567b]">$</span>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                  className="w-full pl-8 pr-4 py-3 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47567b] focus:border-transparent text-[#47567b]"
                  placeholder="0"
                />
              </div>
            </div>

            {/* What's Included */}
            <div>
              <label className="block text-sm font-medium text-[#47567b] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                What's included
              </label>
              <div className="space-y-4">
                {Object.entries(formData.included).map(([key, included]) => (
                  <div key={key} className="flex items-center justify-between p-4 border border-[#e5e7eb] rounded-lg">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={included}
                        onChange={() => handleIncludedToggle(key)}
                        className="w-5 h-5 text-[#47567b] border-[#8c97ac] rounded focus:ring-[#47567b]"
                      />
                      <span className="text-[#47567b] font-medium capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Delivered */}
            <div>
              <label className="block text-sm font-medium text-[#47567b] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                What's delivered
              </label>
              <div className="space-y-4">
                {Object.entries(formData.delivered).map(([key, delivered]) => (
                  <div key={key} className="flex items-center justify-between p-4 border border-[#e5e7eb] rounded-lg">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={delivered}
                        onChange={() => handleDeliveredToggle(key)}
                        className="w-5 h-5 text-[#47567b] border-[#8c97ac] rounded focus:ring-[#47567b]"
                      />
                      <span className="text-[#47567b] font-medium capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Time */}
            <div>
              <label className="block text-sm font-medium text-[#47567b] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Delivery time
              </label>
              <select
                value={formData.deliveryTime}
                onChange={(e) => setFormData(prev => ({ ...prev, deliveryTime: e.target.value }))}
                className="w-full px-4 py-3 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47567b] focus:border-transparent text-[#47567b]"
              >
                {deliveryTimeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="bg-neutral-50 px-[100px] py-8 shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.06),0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div className="flex gap-3 items-start justify-end">
              <button
                onClick={onBack}
                className="flex items-center justify-center h-9 px-3 py-2 rounded-3xl font-['Montserrat'] font-medium text-[14px] text-[#47567b] tracking-[0.28px] leading-[1.5] hover:bg-gray-100 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="flex items-center justify-center h-[37px] w-[164px] px-3 py-2 rounded-3xl font-['Montserrat'] font-medium text-[14px] text-white tracking-[0.28px] leading-[1.5] transition-colors bg-[#667493] hover:bg-[#5a6884]"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Edit Overlay */}
      {showEditOverlay && uploadedImage && (
        <PhotoEditOverlay
          photoUrl={uploadedImage}
          photoIndex={0}
          onClose={handleCloseEditOverlay}
          onSave={handleSavePhotoEdit}
          existingEdit={photoEdits[`${uploadedImage}_0`]}
        />
      )}
    </div>
  );
}