
import React from "react";
import { X } from "lucide-react";
import ModeOption from "./ModeOption";

interface ModeSelectionProps {
  onClose: () => void;
}

const ModeSelection = ({ onClose }: ModeSelectionProps) => {
  return (
    <section className="bg-white border border-zinc-400 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-w-[400px] w-full mx-auto p-6">
      <div className="flex flex-col items-center">
        {/* Close button */}
        <div className="w-full flex justify-start mb-4">
          <button onClick={onClose} className="hover:bg-gray-100 p-1 rounded" aria-label="Close">
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        {/* Title */}
        <h1 className="text-2xl font-semibold text-neutral-800 mb-8">
          MODE 선택
        </h1>
        
        {/* Mode options in a symmetric layout */}
        <div className="flex gap-8 justify-center items-center">
          <ModeOption 
            imageUrl="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/fb062b47b1fd21abd84d9d722e97e3e5219623cd?placeholderIfAbsent=true" 
            label="반말모드" 
          />
          <ModeOption 
            imageUrl="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/dd4085cd3b49e838fbd89b524e7a94bbc12d3eed?placeholderIfAbsent=true" 
            label="존댓말모드" 
          />
        </div>
      </div>
    </section>
  );
};

export default ModeSelection;
