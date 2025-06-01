
import React from "react";
import AssistChatHeader from "./AssistChatHeader";
import AssistChatSidePanel from "./AssistChatSidePanel";
import AssistChatChatArea from "./AssistChatChatArea";
import AssistChatMessageInput from "./AssistChatMessageInput";
import Home2Footer from "./Home2Footer";
import { useChat } from "../hooks/useChat";
import { Button } from "@/components/ui/button";

const AssistCampusMate = () => {
  // ⭐ 이 훅이 EC2 FastAPI Claude 3.5 Sonnet 연결을 담당합니다
  // useChat -> sendMessage -> claudeApi.ts -> EC2 FastAPI -> AWS Bedrock Claude
  const { messages, isLoading, sendMessage, clearMessages } = useChat();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AssistChatHeader />
      
      {/* 챗봇 사용 안내 메시지 - Claude 연결 상태에 따라 메시지 수정 가능 */}
      <div className="w-full border-b border-gray-200 py-2">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm text-gray-600 text-center">
            챗봇은 잘못된 응답을 할 수 있습니다. (Claude 3.5 Sonnet 기반)
          </p>
        </div>
      </div>
      
      <div className="flex flex-1 justify-center px-4 py-6">
        <div className="flex w-full max-w-7xl">
          <div className="mr-6">
            <AssistChatSidePanel />
          </div>
          
          <div className="flex-1 max-w-4xl bg-white rounded-lg shadow-sm">
            <div className="flex flex-col h-full">
              {/* 채팅 영역 - Claude 응답이 여기에 표시됩니다 */}
              <div className="flex-1 p-6 overflow-hidden">
                <AssistChatChatArea 
                  onSendMessage={sendMessage} // EC2 FastAPI로 메시지 전송
                  messages={messages} // Claude 응답 메시지들
                  isLoading={isLoading} // Claude 응답 대기 상태
                />
              </div>
              
              {/* 메시지 입력 영역 - 사용자가 Claude에게 보낼 메시지 입력 */}
              <div className="border-t border-gray-200 p-4">
                <AssistChatMessageInput 
                  onSendMessage={sendMessage} // EC2 FastAPI로 메시지 전송
                  isLoading={isLoading} // 입력 비활성화를 위한 로딩 상태
                />
              </div>
              
              {/* 채팅 초기화 버튼 */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex justify-center">
                  <Button
                    onClick={clearMessages}
                    variant="outline"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    채팅 초기화
                  </Button>
                </div>
              </div>
              
              {/* API 정책 안내 - Claude API 사용량 제한 관련 */}
              <div className="p-4">
                <div className="flex justify-center">
                  <p className="text-sm text-gray-500 text-center">
                    API 정책상, 1분에 한 번씩 질문 해주시길 바랍니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Home2Footer />
    </div>
  );
};

export default AssistCampusMate;
