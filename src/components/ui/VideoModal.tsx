"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./VideoModal.module.css";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
          onClick={onClose}
        >
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close Video">
            ✕
          </button>
          
          <motion.div
            className={styles.videoContainer}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking the video itself
          >
            <div className={styles.videoWrapper}>
              <iframe
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className={styles.iframe}
              ></iframe>
            </div>
            <div className={styles.glowEffect} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
