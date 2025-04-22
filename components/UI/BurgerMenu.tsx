import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'


const BurgerMenu = ({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: any}) => {

  return (
        <AnimatePresence>
            {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="fixed scroll-behavior inset-0 bg-gradient-to-br from-[#0F172A] via-[#1A1529] to-[#3B0764] z-10 flex flex-col justify-center items-center gap-8 linkButton"
            >
                <Link
                href="/"
                onClick={() => setIsOpen(false)}
                >
                Головна
                </Link>
                <Link
                href="/courses"
                onClick={() => setIsOpen(false)}
                >
                Курси
                </Link>
                <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                >
                Про нас
                </Link>
                <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                >
                Увійти
                </Link>
            </motion.div>
            )}
    </AnimatePresence>
  )
}

export default BurgerMenu