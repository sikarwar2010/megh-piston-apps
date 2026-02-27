"use client";
import { Phone, Mail, Clock, CalendarClock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const TopBar = () => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-background text-primary py-2 text-[11px] sm:text-sm border-b overflow-hidden"
    >
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-4">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-1.5"
            >
              <Phone size={14} className="text-primary/80 shrink-0" />
              <span className="break-all sm:break-normal hover:text-primary transition-colors cursor-pointer">
                +91 97190 29044 | +91 9760415467
              </span>
            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-1.5"
            >
              <Mail size={14} className="text-primary/80 shrink-0" />
              <a
                href="mailto:meghdootpistons@gmail.com"
                className="break-all hover:text-primary transition-colors"
              >
                meghdootpistons@gmail.com
              </a>
            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-1.5"
            >
              <Clock size={14} className="text-primary/80 shrink-0" />
              <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-1.5 border-t sm:border-t-0 pt-2 sm:pt-0"
          >
            <Link
              href="/events"
              className="flex items-center gap-1.5 transition-colors hover:text-primary/80 group"
            >
              <CalendarClock
                size={14}
                className="text-primary/80 shrink-0 group-hover:rotate-12 transition-transform"
              />
              <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-1.5 overflow-hidden">
                <span className="font-medium whitespace-nowrap">
                  Latest Event:{" "}
                </span>
                <div className="relative overflow-hidden w-full sm:w-auto">
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-[10px] sm:text-xs block"
                  >
                    AutoMechanika 2025 Istanbul - Visit us at Hall 10, Booth No
                    A-160
                  </motion.span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TopBar;
