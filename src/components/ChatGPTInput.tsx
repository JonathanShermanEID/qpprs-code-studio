/**
 * Q++RS Code Studio v3.0.0 - iOS 26 Monaco Edition
 * ChatGPT 5.0 Field Input with Apple Aesthetic
 * Author: Jonathan Sherman
 * Copyright © 2025 All Rights Reserved
 */

import { useState } from 'react';
import { SendIcon, SparklesIcon } from './HoloGlyphIcons';
import './ChatGPTInput.css';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export function ChatGPTInput() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m ChatGPT 5.0, powered by OpenAI. I can help you with code generation, debugging, optimization, and translation across 37+ programming languages. How can I assist you today?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `I understand you want to: "${input}"\n\nHere's what I can help you with:\n\n1. Generate optimized code\n2. Debug existing code\n3. Translate between languages\n4. Explain complex concepts\n5. Provide best practices\n\nPlease provide more details about your specific needs!`,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  
  return (
    <div className="chatgpt-container">
      <div className="chat-header glass">
        <div className="header-content">
          <SparklesIcon size={24} className="animate" />
          <div className="header-text">
            <h3>ChatGPT 5.0</h3>
            <p>AI-Powered Code Assistant</p>
          </div>
        </div>
        <div className="status-indicator">
          <span className="status-dot"></span>
          <span className="status-text">Online</span>
        </div>
      </div>
      
      <div className="chat-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.role === 'user' ? 'message-user' : 'message-assistant'}`}
          >
            <div className="message-content glass">
              <pre className="message-text">{message.content}</pre>
            </div>
            <span className="message-time">
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        ))}
        
        {isLoading && (
          <div className="message message-assistant">
            <div className="message-content glass">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="chat-input-container glass">
        <textarea
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask ChatGPT 5.0 anything about code..."
          rows={1}
        />
        <button
          className="btn btn-primary send-btn"
          onClick={handleSend}
          disabled={!input.trim() || isLoading}
        >
          <SendIcon size={20} />
        </button>
      </div>
    </div>
  );
}

// © 2025 Jonathan Sherman. All Rights Reserved.

