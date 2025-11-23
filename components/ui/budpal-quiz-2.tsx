'use client';

import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Paperclip, Send } from 'lucide-react';

// Website origins data - simplified for the quiz
const ALL_WEBSITE_ORIGINS = [
  { id: 'india', name: 'India Local Site', email: 'visa@india-immigration.com' },
  { id: 'sri-lanka', name: 'Sri Lanka Local Site', email: 'visa@srilanka-immigration.com' },
  { id: 'sri-lanka-2', name: 'Sri Lanka Local Site 2', email: 'visa@srilankaemigration.com' },
  { id: 'tanzania', name: 'Tanzania Local Site', email: 'visa@tanzaniaimmigration.com' },
  { id: 'kenya', name: 'Kenya Local Site', email: 'visa@kenya-immigration.com' },
  { id: 'rwanda', name: 'Rwanda Local Site', email: 'visa@rwandaimmigration.com' },
  { id: 'uganda', name: 'Uganda Local Site', email: 'visa@uganda-immigration.com' },
  { id: 'indonesia', name: 'Indonesia Local Site', email: 'visa@indonesia-immigration.com' },
  { id: 'united', name: 'United eVisa Site', email: 'visa@unitedevisa.com' },
  { id: 'worldmaxxing', name: 'Worldmaxxing Site', email: 'visa@worldmaxxing.com' },
];

export function BudPalQuiz2(): React.JSX.Element {
  const [selectedOrigin, setSelectedOrigin] = useState<typeof ALL_WEBSITE_ORIGINS[0] | null>(null);
  const [emailInput, setEmailInput] = useState('Please send the documents to our email address at ');
  const [isCorrect, setIsCorrect] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const prefix = 'Please send the documents to our email address at ';

  // Loop the quiz animation
  useEffect(() => {
    let typingInterval: NodeJS.Timeout | null = null;
    let submitTimeout: NodeJS.Timeout | null = null;
    let resetTimeout: NodeJS.Timeout | null = null;
    let initialDelay: NodeJS.Timeout | null = null;
    let isMounted = true;

    const startQuizCycle = () => {
      if (!isMounted) return;

      const randomOrigin = ALL_WEBSITE_ORIGINS[Math.floor(Math.random() * ALL_WEBSITE_ORIGINS.length)];
      if (!randomOrigin) return;
      
      setSelectedOrigin(randomOrigin);
      setEmailInput(prefix);
      setIsCorrect(false);
      setIsTyping(false);

      // Start auto-typing after a short delay
      initialDelay = setTimeout(() => {
        if (!isMounted) return;

        setIsTyping(true);
        const correctEmail = randomOrigin.email;
        const fullMessage = prefix + correctEmail;
        let currentIndex = prefix.length;

        // Type out the email character by character
        typingInterval = setInterval(() => {
          if (!isMounted) {
            if (typingInterval) clearInterval(typingInterval);
            return;
          }

          if (currentIndex < fullMessage.length) {
            setEmailInput(fullMessage.substring(0, currentIndex + 1));
            currentIndex++;
          } else {
            if (typingInterval) {
              clearInterval(typingInterval);
              typingInterval = null;
            }
            setIsTyping(false);
            
            // Auto-submit after a brief pause
            submitTimeout = setTimeout(() => {
              if (!isMounted) return;

              setIsCorrect(true);
              
              // Reset and restart after showing success for 3 seconds
              resetTimeout = setTimeout(() => {
                if (isMounted) {
                  startQuizCycle(); // Restart the cycle
                }
              }, 3000);
            }, 500);
          }
        }, 50); // Type each character every 50ms
      }, 1500); // Wait 1.5 seconds before starting to type
    };

    // Start the first cycle
    startQuizCycle();

    return () => {
      isMounted = false;
      if (initialDelay) clearTimeout(initialDelay);
      if (typingInterval) clearInterval(typingInterval);
      if (submitTimeout) clearTimeout(submitTimeout);
      if (resetTimeout) clearTimeout(resetTimeout);
    };
  }, []);

  // Scroll to bottom of messages within chat container only
  useEffect(() => {
    if (messagesEndRef.current && messagesEndRef.current.parentElement) {
      const chatContainer = messagesEndRef.current.parentElement;
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [isCorrect, emailInput]);

  if (!selectedOrigin) {
    return <div className="text-white">Loading quiz...</div>;
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-4">Training Center - Quiz 2: Respond to Customer Inquiry (Preview)</h3>
        <div className="bg-blue-50/10 border border-blue-200/30 rounded-lg p-4 mb-4">
          <p className="text-gray-300 font-medium mb-2">📋 Preview Mode:</p>
          <p className="text-gray-300 text-sm">
            This is a preview of the interactive quiz. The system will automatically complete the message with the correct email address based on the website origin shown in the Session Information.
          </p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-full">
        <div className="h-full flex flex-col lg:flex-row w-full">
          {/* Left Column - Chat Interface */}
          <div className="flex-1 flex flex-col border-r border-gray-200 min-w-0 w-full lg:w-auto">
            <div className="flex-1 p-3 sm:p-4 w-full min-w-0">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">
                Chat with Charlie
              </h2>
              
              {/* Chat Messages Area */}
              <div className="flex-1 overflow-y-auto mb-3 sm:mb-4 border border-gray-200 rounded-lg p-3 sm:p-4 min-h-[300px] sm:min-h-[400px] max-h-[400px] sm:max-h-[500px] bg-white">
                {/* System message */}
                <div className="mb-3 sm:mb-4 text-center">
                  <div className="inline-block bg-gray-100 text-gray-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                    Calum has joined the session
                  </div>
                </div>
                
                {/* Agent message */}
                <div className="mb-3 sm:mb-4 text-right">
                  <div className="inline-block max-w-[80%] sm:max-w-xs lg:max-w-md px-3 sm:px-4 py-2 rounded-lg bg-blue-500 text-white">
                    <div className="text-xs sm:text-sm text-left">Hello, how may I assist you?</div>
                    <div className="flex items-center gap-2 mt-1 text-xs opacity-75 justify-end">
                      <span>12:05:06 AM</span>
                      <span className="text-white">·</span>
                      <span className="text-white">Calum</span>
                    </div>
                  </div>
                </div>
                
                {/* Customer message */}
                <div className="mb-3 sm:mb-4 text-left">
                  <div className="inline-block max-w-[80%] sm:max-w-xs lg:max-w-md px-3 sm:px-4 py-2 rounded-lg bg-gray-200 text-gray-800">
                    <div className="text-xs sm:text-sm">What is the email address to send their documents to</div>
                    <div className="flex items-center gap-2 mt-1 text-xs opacity-75">
                      <span>12:05:07 AM</span>
                      <span className="text-gray-500">·</span>
                      <span className="text-gray-500">Charlie</span>
                    </div>
                  </div>
                </div>
                
                {/* User's response (if submitted and correct) */}
                {isCorrect && (
                  <div className="mb-3 sm:mb-4 text-right">
                    <div className="inline-block max-w-[80%] sm:max-w-xs lg:max-w-md px-3 sm:px-4 py-2 rounded-lg bg-green-500 text-white border-2 border-green-600">
                      <div className="text-xs sm:text-sm text-left">{emailInput}</div>
                      <div className="flex items-center gap-2 mt-1 text-xs opacity-75 justify-end">
                        <CheckCircle className="w-4 h-4" />
                        <span>Just now</span>
                        <span className="text-white">·</span>
                        <span className="text-white">Calum</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input Area */}
              <div className="flex flex-col gap-2 w-full min-w-0">
                {/* Buttons and Input Row */}
                <div className="flex flex-row gap-2 items-start w-full min-w-0">
                  {/* Transfer Icon Button */}
                  <button
                    title="Transfer Session"
                    className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-shrink-0"
                    style={{ lineHeight: 0 }}
                    disabled
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 17l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
                    </svg>
                  </button>
                  {/* Attachment Button */}
                  <button
                    className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-shrink-0"
                    title="Attach File"
                    style={{ lineHeight: 0 }}
                    disabled
                  >
                    <Paperclip className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
                  </button>
                  
                  <textarea
                    rows={3}
                    placeholder="Type your message..."
                    className="flex-1 min-w-0 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                    value={emailInput}
                    readOnly
                    disabled
                    style={{ width: '100%', maxWidth: '100%' }}
                  />
                  <button
                    className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 text-sm flex items-center gap-2 flex-shrink-0 whitespace-nowrap"
                    disabled
                  >
                    <Send className="w-4 h-4" />
                    <span className="hidden sm:inline">{isCorrect ? 'Sent' : isTyping ? 'Typing...' : 'Send'}</span>
                    <span className="sm:hidden">Send</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Session & Visitor Info */}
          <div className="w-full lg:w-80 bg-gray-50 p-3 sm:p-4 overflow-y-auto border-t lg:border-t-0 lg:border-l border-gray-200">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800">Session Details</h3>
            
            {/* Session Information */}
            <div className="bg-white p-3 sm:p-4 rounded-lg mb-3 sm:mb-4 border border-gray-200">
              <h4 className="font-semibold text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base">Session Information</h4>
              <div className="space-y-2 text-xs sm:text-sm">
                <div>
                  <span className="font-medium text-gray-600">Session ID:</span>
                  <div className="font-mono text-blue-600 text-xs mt-1">0MNI-V85LY9X</div>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Site:</span>
                  <div className="mt-1">
                    <span className={`
                      text-gray-800 inline-block px-2 py-1 rounded border-2
                      ${isCorrect 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-red-500 bg-red-50'
                      }
                    `}>
                      {selectedOrigin.name.toLowerCase().replace(/\s+/g, '-')}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Started At:</span>
                  <div className="text-gray-800">November 18, 2025 at 09:39 PM</div>
                </div>
              </div>
            </div>
            
            {/* Visitor Information */}
            <div className="bg-white p-3 sm:p-4 rounded-lg mb-3 sm:mb-4 border border-gray-200">
              <h4 className="font-semibold text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base">Visitor Information</h4>
              <div className="space-y-2 text-xs sm:text-sm">
                <div>
                  <span className="font-medium text-gray-600">Full Name:</span>
                  <div className="text-gray-800">Charlie</div>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Email:</span>
                  <div className="text-gray-800">Charlie@heartstopper.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Success Message */}
        {isCorrect && (
          <div className="p-4 bg-green-50 border-t border-green-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-green-900">Perfect! You got it right! 🎉</h3>
                <p className="text-sm text-green-700">You correctly identified the support email address for {selectedOrigin.name}.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

