
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ClaudeRequest {
  modelId: string;
  contentType: string;
  accept: string;
  body: {
    anthropic_version: string;
    max_tokens: number;
    messages: Array<{
      role: string;
      content: Array<{
        type: string;
        text: string;
      }>;
    }>;
  };
}

export const sendMessageToClaude = async (message: string, conversationHistory: Message[] = []): Promise<string> => {
  try {
    // Convert conversation history to Claude format
    const claudeMessages = conversationHistory
      .filter(msg => msg.role === 'user' || msg.role === 'assistant')
      .map(msg => ({
        role: msg.role,
        content: [{
          type: "text",
          text: msg.content
        }]
      }));

    // Add the new user message
    claudeMessages.push({
      role: "user",
      content: [{
        type: "text",
        text: message
      }]
    });

    const requestBody: ClaudeRequest = {
      modelId: "anthropic.claude-3-5-sonnet-20240620-v1:0",
      contentType: "application/json",
      accept: "application/json",
      body: {
        anthropic_version: "bedrock-2023-05-31",
        max_tokens: 1000,
        messages: claudeMessages
      }
    };

    console.log('Sending request to Claude API:', requestBody);

    // TODO: Replace with your actual API endpoint
    const response = await fetch('/api/claude', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    
    // Extract the response text from Claude's response format
    return data.content?.[0]?.text || "죄송합니다. 응답을 처리할 수 없습니다.";
  } catch (error) {
    console.error('Claude API Error:', error);
    return "죄송합니다. 현재 서비스에 문제가 있습니다. 잠시 후 다시 시도해주세요.";
  }
};
