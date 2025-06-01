
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

    console.log('FastAPI 백엔드로 요청을 보내는 중:', requestBody);

    // ⭐ 중요: 여기서 localhost:8000을 실제 EC2 인스턴스의 퍼블릭 IP 주소로 변경해야 합니다
    // 예시: 'http://your-ec2-public-ip:8000/api/chat'
    // 또는 도메인이 있다면: 'https://your-domain.com/api/chat'
    // EC2 보안 그룹에서 포트 8000이 열려있는지 확인 필요
    const response = await fetch('http://localhost:8000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 필요시 인증 헤더 추가 가능
        // 'Authorization': 'Bearer your-token'
      },
      body: JSON.stringify(requestBody)
    });

    // HTTP 응답 상태 코드 확인
    if (!response.ok) {
      const errorData = await response.json();
      console.error('API 요청 실패:', response.status, errorData);
      throw new Error(`API request failed: ${response.status} - ${errorData.detail || 'Unknown error'}`);
    }

    const data: FastAPIResponse = await response.json();
    console.log('Claude로부터 받은 응답:', data);
    
    return data.response || "죄송합니다. 응답을 처리할 수 없습니다.";
  } catch (error) {
    console.error('FastAPI Backend 연결 오류:', error);
    
    // 네트워크 오류인지 확인
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return "네트워크 연결 오류: EC2 인스턴스에 연결할 수 없습니다. IP 주소와 포트를 확인해주세요.";
    }
    
    return "죄송합니다. 현재 서비스에 문제가 있습니다. 잠시 후 다시 시도해주세요.";
  }
};
