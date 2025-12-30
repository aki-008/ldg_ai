"use client";

import { useState } from "react";

export default function ChatPanel({
  editor,
  setAiSuggestion,
}: {
  editor: any;
  setAiSuggestion: (text: string) => void;
}) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: "user" | "ai"; content: string }>>([]);

  const askAI = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = input;
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setLoading(true);

    try {
      // TEMP MOCK RESPONSE (Replace with actual LLM API)
      await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate API delay
      const aiResponse = `Refined clause:\n\n${userMessage}`;

      setMessages((prev) => [...prev, { role: "ai", content: aiResponse }]);
      setAiSuggestion(aiResponse);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [...prev, { role: "ai", content: "Error processing request. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-96 border-l border-gray-300 flex flex-col bg-white overflow-hidden">
      {/* HEADER */}
      <div className="p-6 font-bold text-lg border-b border-gray-300 bg-white text-black">
        AI Assistant
      </div>

      {/* MESSAGES SECTION */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
        {messages.length === 0 ? (
          <p className="text-sm text-gray-600 italic leading-relaxed">
            Ask the AI to refine, rewrite, or add clauses. Your suggestions will appear here.
          </p>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs px-4 py-3 rounded-lg ${
                  msg.role === "user"
                    ? "bg-black text-white rounded-br-none"
                    : "bg-gray-200 text-black rounded-bl-none"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.content}</p>
              </div>
            </div>
          ))
        )}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-200 text-black px-4 py-3 rounded-lg">
              <p className="text-sm">Processing...</p>
            </div>
          </div>
        )}
      </div>

      {/* INPUT SECTION */}
      <div className="p-6 border-t border-gray-300 bg-white flex flex-col gap-3">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              askAI();
            }
          }}
          placeholder="e.g., Rewrite clause 2 more formally..."
          className="w-full bg-gray-100 p-3 rounded border border-gray-300 text-sm text-black placeholder-gray-500 focus:outline-none focus:border-black resize-none"
          rows={3}
        />
        <button
          onClick={askAI}
          disabled={loading || !input.trim()}
          className="w-full bg-black hover:bg-gray-900 disabled:bg-gray-400 text-white px-4 py-3 rounded text-sm font-bold border border-black transition"
        >
          {loading ? "Processing..." : "Send Message"}
        </button>
      </div>
    </div>
  );
}
