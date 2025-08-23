import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Updates.css";
export default function Updates() {
  const [updates, setUpdates] = useState([]);

  // Fake messages for demo
  const fakeMessages = [
    "🚀 New feature deployed!",
    "🐛 Bug fix in authentication module.",
    "⚡ Server performance improved.",
    "🎨 Updated UI styles.",
    "🔒 Security patch applied.",
  ];

  // Add new update every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage =
        fakeMessages[Math.floor(Math.random() * fakeMessages.length)];
      setUpdates((prev) => [
        { id: Date.now(), text: randomMessage },
        ...prev, // newest at top
      ]);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="updates-panel">
      <h2 className="title">📢 Project Updates</h2>
      <div className="updates-list">
        <AnimatePresence>
          {updates.map((update) => (
            <motion.div
              key={update.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="update-item"
            >
              {update.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
