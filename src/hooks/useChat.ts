
import { useState, useCallback } from 'react';
import { Message, sendMessageToClaude } from '../services/claudeApi';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addMessage = useCallback((message: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...message,
      id: Date.now().toString(),
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isLoading) return;

    setIsLoading(true);
    
    // Add user message
    const userMessage = addMessage({
      role: 'user',
      content: content.trim()
    });

    try {
      // Get response from Claude
      const response = await sendMessageToClaude(content.trim(), messages);
      
      // Add assistant response
      addMessage({
        role: 'assistant',
        content: response
      });
    } catch (error) {
      console.error('Failed to send message:', error);
      addMessage({
        role: 'assistant',
        content: '죄송합니다. 메시지를 처리할 수 없습니다.'
      });
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading, addMessage]);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return {
    messages,
    isLoading,
    sendMessage,
    clearMessages
  };
};
