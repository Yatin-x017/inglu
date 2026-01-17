import React, { useState, useEffect, useRef } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedListProps {
  items: string[];
  onItemSelect: (item: string, index: number) => void;
  showGradients?: boolean;
  enableArrowNavigation?: boolean;
  displayScrollbar?: boolean;
  itemsPerView?: number;
  autoScroll?: boolean;
  autoScrollSpeed?: number;
}

export default function AnimatedList({
  items,
  onItemSelect,
  showGradients = true,
  enableArrowNavigation = true,
  displayScrollbar = true,
  itemsPerView = 5,
  autoScroll = false,
  autoScrollSpeed = 3000,
}: AnimatedListProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollIndex, setScrollIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimerRef = useRef<NodeJS.Timeout>();

  const visibleItems = items.slice(scrollIndex, scrollIndex + itemsPerView);
  const maxScroll = Math.max(0, items.length - itemsPerView);

  useEffect(() => {
    if (autoScroll && scrollTimerRef.current) {
      clearTimeout(scrollTimerRef.current);
    }

    if (autoScroll) {
      scrollTimerRef.current = setTimeout(() => {
        handleScroll('next');
      }, autoScrollSpeed);
    }

    return () => {
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };
  }, [scrollIndex, autoScroll, autoScrollSpeed]);

  const handleScroll = (direction: 'prev' | 'next') => {
    if (direction === 'next') {
      setScrollIndex((prev) => (prev >= maxScroll ? 0 : prev + 1));
    } else {
      setScrollIndex((prev) => (prev <= 0 ? maxScroll : prev - 1));
    }
  };

  const handleItemSelect = (item: string, index: number) => {
    setSelectedIndex(index);
    onItemSelect(item, index);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!enableArrowNavigation) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        handleScroll('next');
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        handleScroll('prev');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [enableArrowNavigation, maxScroll]);

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className={cn(
          'relative rounded-lg overflow-hidden',
          displayScrollbar && 'overflow-y-auto'
        )}
        style={{
          maxHeight: `${itemsPerView * 60}px`,
        }}
      >
        {/* Top Gradient */}
        {showGradients && scrollIndex > 0 && (
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
        )}

        {/* Items Container */}
        <div className="space-y-2 p-4">
          {visibleItems.map((item, idx) => {
            const actualIndex = scrollIndex + idx;
            const isSelected = actualIndex === selectedIndex;

            return (
              <div
                key={actualIndex}
                onClick={() => handleItemSelect(item, actualIndex)}
                className={cn(
                  'p-3 rounded-lg cursor-pointer transition-all duration-200',
                  'border border-border hover:border-primary',
                  isSelected
                    ? 'bg-primary text-primary-foreground border-primary shadow-lg'
                    : 'bg-card text-foreground hover:bg-card/80'
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{item}</span>
                  {isSelected && (
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Gradient */}
        {showGradients && scrollIndex < maxScroll && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
        )}
      </div>

      {/* Navigation Buttons */}
      {items.length > itemsPerView && (
        <div className="flex gap-2 mt-4 justify-center">
          <button
            onClick={() => handleScroll('prev')}
            disabled={scrollIndex === 0}
            className={cn(
              'p-2 rounded-lg border border-border transition-all',
              scrollIndex === 0
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-primary hover:text-primary-foreground hover:border-primary'
            )}
            title="Previous"
          >
            <ChevronUp size={20} />
          </button>

          {/* Scroll Indicator */}
          <div className="flex items-center gap-2 px-4">
            <span className="text-xs text-muted-foreground">
              {scrollIndex + 1} / {maxScroll + 1}
            </span>
          </div>

          <button
            onClick={() => handleScroll('next')}
            disabled={scrollIndex >= maxScroll}
            className={cn(
              'p-2 rounded-lg border border-border transition-all',
              scrollIndex >= maxScroll
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-primary hover:text-primary-foreground hover:border-primary'
            )}
            title="Next"
          >
            <ChevronDown size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
