
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const MessageInput = ({ onSendMessage, isLoading }: MessageInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-3 bg-gray-50 rounded-full px-4 py-3 border border-gray-200">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
            disabled={isLoading}
          />
          <div className="flex items-center gap-2">
            <Button
              type="submit"
              disabled={!message.trim() || isLoading}
              className="p-2 bg-sky-500 hover:bg-sky-600 rounded-full transition-colors"
              size="icon"
            >
              <Send className="w-4 h-4 text-white" />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
