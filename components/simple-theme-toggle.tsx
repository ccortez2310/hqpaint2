'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface SimpleThemeToggleProps {
  isTransparent?: boolean
}

export function SimpleThemeToggle({ isTransparent = false }: SimpleThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="transition-colors duration-200 hover:bg-white/10"
    >
      {theme === 'light' ? (
        <Moon className={cn(
          "h-[1.2rem] w-[1.2rem] transition-colors",
          isTransparent 
            ? "text-slate-100 hover:text-white" 
            : "text-slate-800 hover:text-slate-900"
        )} />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] text-amber-500 hover:text-amber-400 transition-colors" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}