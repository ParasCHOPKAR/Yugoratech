"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from './ChatBotBtn.module.css';

export default function ChatBotBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi there! How can we help you today?' }
  ]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleQuestionClick = (question) => {
    setMessages((prev) => [...prev, { type: 'user', text: question }]);
    
    // Simulate bot response
    setTimeout(() => {
      let reply = "Thanks for asking! Our team will get back to you shortly.";
      if (question.includes("Web Development")) {
        reply = "We offer custom, responsive, and high-performance websites tailored to your unique business needs.";
      } else if (question.includes("Software")) {
        reply = "We build scalable web and mobile applications engineered with the latest technologies.";
      } else if (question.includes("Digital Marketing")) {
        reply = "Our data-driven digital marketing strategies boost your online presence and accelerate growth.";
      } else if (question.includes("SEO")) {
        reply = "We provide advanced SEO/AEO optimization to rank your business higher on search engines.";
      }
      setMessages((prev) => [...prev, { type: 'bot', text: reply }]);
    }, 600);
  };

  const predefinedQuestions = [
    "Tell me about Web Development",
    "What Software Solutions do you provide?",
    "How can Digital Marketing help?",
    "Do you offer SEO services?"
  ];

  return (
    <>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <div className={styles.headerInfo}>
              <Image src="/image/chat_icon.png" alt="Chat Bot" width={30} height={30} className={styles.headerIcon} />
              <span>YugoraTech Assistant</span>
            </div>
            <button onClick={toggleChat} className={styles.closeBtn}>&times;</button>
          </div>
          
          <div className={styles.chatBody}>
            {messages.map((msg, idx) => (
              <div key={idx} className={msg.type === 'bot' ? styles.msgBot : styles.msgUser}>
                {msg.text}
              </div>
            ))}
          </div>
          
          <div className={styles.chatFooter}>
            <p className={styles.suggestionsTitle}>Ask about our services:</p>
            <div className={styles.suggestionsList}>
              {predefinedQuestions.map((q, idx) => (
                <button key={idx} className={styles.suggestionBtn} onClick={() => handleQuestionClick(q)}>
                  {q}
                </button>
              ))}
            </div>
            <button onClick={toggleChat} className={styles.closeFooterBtn}>Close Chat</button>
          </div>
        </div>
      )}
      
      <button onClick={toggleChat} className={styles.chatBotBtn} aria-label="Open Chat">
        <Image src="/image/chat_icon.png" alt="Chat" width={70} height={70} />
      </button>
    </>
  );
}
