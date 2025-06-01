
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

    console.log('사용자 메시지 전송 시작:', content);
    setIsLoading(true);
    
    // 사용자 메시지를 채팅 화면에 즉시 표시
    const userMessage = addMessage({
      role: 'user',
      content: content.trim()
    });

    try {
      // ⭐ 여기서 EC2의 FastAPI 백엔드를 통해 Claude 3.5 Sonnet에 연결
      // claudeApi.ts의 sendMessageToClaude 함수가 실제 API 호출을 담당
      console.log('Claude API 호출 중...');
      const response = await sendMessageToClaude(content.trim(), messages);
      console.log('Claude 응답 받음:', response);
      
      // Claude의 응답을 채팅 화면에 표시
      addMessage({
        role: 'assistant',
        content: response
      });
    } catch (error) {
      console.error('메시지 전송 실패:', error);
      
      // 오류 발생 시 사용자에게 알림 메시지 표시
      addMessage({
        role: 'assistant',
        content: '죄송합니다. 메시지를 처리할 수 없습니다. EC2 서버 연결을 확인해주세요.'
      });
    } finally {
      setIsLoading(false);
      console.log('메시지 전송 완료');
    }
  }, [messages, isLoading, addMessage]);

  const clearMessages = useCallback(() => {
    console.log('채팅 메시지 초기화');
    setMessages([]);
  }, []);

  return {
    messages,
    isLoading,
    sendMessage,
    clearMessages
  };
};
