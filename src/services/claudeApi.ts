
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface FastAPIRequest {
  message: string;
  conversation_history: Array<{
    role: string;
    content: string;
  }>;
}

export interface FastAPIResponse {
  response: string;
  status: string;
}

export const sendMessageToClaude = async (message: string, conversationHistory: Message[] = []): Promise<string> => {
  try {
    // 대화 히스토리를 FastAPI 형식으로 변환
    const history = conversationHistory
      .filter(msg => msg.role === 'user' || msg.role === 'assistant')
      .map(msg => ({
        role: msg.role,
        content: msg.content
      }));

    const requestBody: FastAPIRequest = {
      message: message,
      conversation_history: history
    };

    console.log('Sending request to FastAPI backend:', requestBody);

    // FastAPI 백엔드로 요청 (EC2 인스턴스 주소로 변경 필요)
    const response = await fetch('http://localhost:8000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API request failed: ${response.status} - ${errorData.detail || 'Unknown error'}`);
    }

    const data: FastAPIResponse = await response.json();
    
    return data.response || "죄송합니다. 응답을 처리할 수 없습니다.";
  } catch (error) {
    console.error('FastAPI Backend Error:', error);
    return "죄송합니다. 현재 서비스에 문제가 있습니다. 잠시 후 다시 시도해주세요.";
  }
};
