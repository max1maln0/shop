import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const AccordionItem = ({ title, children }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="bg-gray-200 rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <button
                onClick={() => setOpen(!isOpen)}
                className="w-full flex items-center justify-between px-6 py-5 text-left text-gray-900 font-semibold hover:text-blue-700 cursor-pointer"
            >
                <span>{title}</span>
                <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronRight className="text-black w-5 h-5" />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AccordionItem;