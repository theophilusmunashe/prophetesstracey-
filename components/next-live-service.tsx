"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FacebookLiveIcon from './facebook-live-icon';
import { Radio, Clock, Calendar, Sparkles } from 'lucide-react';

const services: { [key: string]: { time: string; name: string }[] } = {
  '1': [{ time: '13:00', name: 'Word Service' }],
  '2': [{ time: '13:00', name: 'Prophetic Service' }],
  '3': [
    { time: '13:00', name: 'Deliverance Service' },
    { time: '17:30', name: 'Worship Service' },
  ],
  '4': [
    { time: '13:00', name: 'Prophetic Service' },
    { time: '17:30', name: 'Partners' },
    { time: '20:00', name: 'Diaspora Zoom' },
  ],
  '5': [{ time: '13:00', name: 'PUSH Prayer' }],
  '6': [{ time: '14:30', name: 'Push Prayer' }],
  '0': [{ time: '10:00', name: 'Sunday Service' }],
};

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const TypingText = ({ text, className = "" }: { text: string; className?: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
    }
  }, [currentIndex, text, isComplete]);

  return (
    <span className={`${className} ${isComplete ? 'opacity-100' : 'opacity-90'}`}>
      {displayedText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-0.5 h-4 bg-gold/60 ml-0.5 rounded-sm"
        />
      )}
    </span>
  );
};

const NextLiveService = () => {
  const [nextServiceInfo, setNextServiceInfo] = useState<{ name: string; time: string; day: string } | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const getNextService = () => {
      const now = new Date();
      const currentDay = now.getDay();
      const currentTime = now.getHours() * 60 + now.getMinutes();

      // First check if there's an active service today
      const todayServices = services[currentDay.toString()];
      if (todayServices) {
        for (const service of todayServices) {
          const [hours, minutes] = service.time.split(':').map(Number);
          const serviceTime = hours * 60 + minutes;
          const serviceEndTime = serviceTime + 60; // Add 1 hour for service duration

          // Check if service is currently active
          if (serviceTime <= currentTime && currentTime < serviceEndTime) {
            return { ...service, day: days[currentDay] };
          }
        }
      }

      // If no active service today, find next service
      for (let i = 1; i <= 7; i++) {
        const dayIndex = (currentDay + i) % 7;
        const dayServices = services[dayIndex.toString()];

        if (dayServices && dayServices.length > 0) {
          const service = dayServices[0]; // Take first service of the day
          return { ...service, day: days[dayIndex] };
        }
      }

      return null;
    };

    setNextServiceInfo(getNextService());
    
    // Update every minute to check for service changes
    const interval = setInterval(getNextService, 60000);
    return () => clearInterval(interval);
  }, []);

  // Service status effect
  useEffect(() => {
    if (!nextServiceInfo) return;

    const updateServiceStatus = () => {
      const now = new Date();
      const [hours, minutes] = nextServiceInfo.time.split(':').map(Number);
      
      const serviceDate = new Date();
      serviceDate.setHours(hours, minutes, 0, 0);
      
      // Set service date to today if time has passed
      if (serviceDate <= now) {
        serviceDate.setDate(serviceDate.getDate());
      }

      const diff = serviceDate.getTime() - now.getTime();
      const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
      const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      // Calculate service end time (assuming 1 hour duration)
      const serviceEndDate = new Date(serviceDate.getTime() + (60 * 60 * 1000));
      const serviceEndDiff = serviceEndDate.getTime() - now.getTime();
      const isServiceActive = serviceEndDiff > 0 && diff <= 0;

      if (isServiceActive) {
        setCountdown("Happening Now...");
      } else if (hoursLeft > 0) {
        setCountdown(`Starts in ${hoursLeft}h ${minutesLeft}m`);
      } else if (minutesLeft > 0) {
        setCountdown(`Starts in ${minutesLeft}m`);
      } else {
        setCountdown("Starting Soon!");
      }
    };

    updateServiceStatus();
    const interval = setInterval(updateServiceStatus, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [nextServiceInfo]);

  // State to track if service is active
  const [isServiceActive, setIsServiceActive] = useState(false);

  // Update service active state
  useEffect(() => {
    if (!nextServiceInfo) return;

    const checkServiceStatus = () => {
      const now = new Date();
      const [hours, minutes] = nextServiceInfo.time.split(':').map(Number);
      
      const serviceDate = new Date();
      serviceDate.setHours(hours, minutes, 0, 0);
      
      // Set service date to today if time has passed
      if (serviceDate <= now) {
        serviceDate.setDate(serviceDate.getDate());
      }

      const diff = serviceDate.getTime() - now.getTime();
      
      // Calculate service end time (assuming 1 hour duration)
      const serviceEndDate = new Date(serviceDate.getTime() + (60 * 60 * 1000));
      const serviceEndDiff = serviceEndDate.getTime() - now.getTime();
      const isActive = serviceEndDiff > 0 && diff <= 0;

      setIsServiceActive(isActive);
    };

    checkServiceStatus();
    const interval = setInterval(checkServiceStatus, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [nextServiceInfo]);

  if (!nextServiceInfo) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Countdown - positioned outside and above container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold z-20"
      >
        {countdown}
      </motion.div>

      {/* Glow effect */}
      <motion.div
        animate={{
          boxShadow: isHovered 
            ? "0 0 30px rgba(255, 215, 0, 0.3), 0 0 60px rgba(255, 215, 0, 0.1)"
            : "0 0 15px rgba(255, 215, 0, 0.2), 0 0 30px rgba(255, 215, 0, 0.05)"
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-2xl"
      />
      
      <motion.a
        href="https://www.facebook.com/prophetesstraceypilime"
        target="_blank"
        rel="noopener noreferrer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="relative flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 font-bold text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-2xl shadow-2xl transition-all duration-300 hover:border-gold/40 group overflow-hidden min-h-[60px] sm:min-h-[70px]"
      >
        {/* Animated gradient background */}
        <motion.div
          animate={{
            background: isHovered
              ? "linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 215, 0, 0.05))"
              : "linear-gradient(135deg, rgba(255, 215, 0, 0.08), rgba(255, 215, 0, 0.02))"
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        />

        
        {/* Live indicator */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative flex items-center gap-2"
        >
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="relative"
          >
            <Radio className="w-4 h-4 text-gold" />
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"
            />
          </motion.div>
        </motion.div>

        {/* Service info */}
        <div className="relative flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gold" />
            <TypingText 
              text={`${nextServiceInfo.day} : ${nextServiceInfo.name}`} 
              className="text-gold font-heading"
            />
          </div>
          
          <div className="hidden sm:flex items-center gap-2">
            <Clock className="w-4 h-4 text-white/80" />
            <span className="text-white/90 font-medium">{isServiceActive ? 'Live Now' : nextServiceInfo.time || ''}</span>
            {isServiceActive && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://www.facebook.com/prophetesstracey-pilime', '_blank')}
                className="ml-4 px-4 py-2 bg-gold text-background font-bold text-sm rounded-full hover:bg-gold-light transition-all duration-300"
              >
                Join Service
              </motion.button>
            )}
          </div>
        </div>

        
        {/* Hover shine effect */}
        <motion.div
          animate={{
            x: isHovered ? "100%" : "-100%"
          }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </motion.a>
    </motion.div>
  );
};

export default NextLiveService;
