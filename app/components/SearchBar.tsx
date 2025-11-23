"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { useDebounce } from "@/lib/hooks/use-debounce";
import { searchProductsFuzzy } from "@/lib/fuzzy-search";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [isFocused, setIsFocused] = useState(false);
  const debouncedInputValue = useDebounce(inputValue, 200);
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  const memoizedSuggestions = useMemo(() => {
    if (debouncedInputValue.length > 0) {
      const results = searchProductsFuzzy(debouncedInputValue);
      return results.slice(0, 5);
    } else {
      return [];
    }
  }, [debouncedInputValue]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isFocused || memoizedSuggestions.length === 0) return;

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setHighlightedIndex((prevIndex) =>
          (prevIndex + 1) % memoizedSuggestions.length
        );
        suggestionsRef.current?.children[highlightedIndex + 1]?.scrollIntoView({
          block: "nearest",
        });
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setHighlightedIndex((prevIndex) =>
          (prevIndex - 1 + memoizedSuggestions.length) % memoizedSuggestions.length
        );
        suggestionsRef.current?.children[highlightedIndex - 1]?.scrollIntoView({
          block: "nearest",
        });
      } else if (event.key === "Enter") {
        event.preventDefault();
        if (highlightedIndex !== -1 && memoizedSuggestions[highlightedIndex]) {
          router.push(`/shop/${memoizedSuggestions[highlightedIndex].slug}`);
          setInputValue("");
          setIsFocused(false);
        } else if (inputValue.trim()) {
          router.push(`/search?query=${inputValue}`);
          setInputValue("");
          setIsFocused(false);
        }
      } else if (event.key === "Escape") {
        event.preventDefault();
        setInputValue("");
        setIsFocused(false);
        searchInputRef.current?.blur();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFocused, memoizedSuggestions, highlightedIndex, inputValue, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      router.push(`/search?query=${inputValue}`);
      setInputValue("");
      setIsFocused(false);
    }
  };

  const handleSuggestionClick = (slug: string) => {
    router.push(`/shop/${slug}`);
    setInputValue("");
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 150);
  };

  const showSuggestionsDropdown = isFocused && (memoizedSuggestions.length > 0 || (inputValue.length > 0 && debouncedInputValue.length > 0));
  const showNoResultsMessage = isFocused && inputValue.length > 0 && debouncedInputValue.length > 0 && memoizedSuggestions.length === 0;

  return (
    <div className="relative w-full mx-auto">
      <form onSubmit={handleSearchSubmit} className={`relative flex items-center w-full transition-all duration-300 ${isFocused || inputValue ? 'rounded-md shadow-lg' : 'rounded-md'}`}>
        <Input
          ref={searchInputRef}
          type="text"
          placeholder="Search for products..."
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={cn(
            "w-full pl-10 pr-4 py-2 border",
            isFocused || inputValue ? 'rounded-md focus:ring-2 focus:ring-primary' : 'rounded-md',
            isFocused || inputValue ? 'pr-10' : 'pr-4'
          )}
          aria-label="Search products"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={showSuggestionsDropdown}
          aria-controls="search-suggestions"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        {inputValue && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setInputValue("");
              setHighlightedIndex(-1);
              searchInputRef.current?.focus();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label="Clear search input"
          >
            <X className="h-5 w-5" />
          </Button>
        )}
      </form>

      {showSuggestionsDropdown && (
        <div
          ref={suggestionsRef}
          id="search-suggestions"
          className="absolute top-full left-0 right-0 z-10 bg-popover border border-border rounded-md shadow-lg mt-1 overflow-hidden"
          role="listbox"
        >
          {memoizedSuggestions.map((product, index) => (
            <Link key={product.id} href={`/shop/${product.slug}`} passHref legacyBehavior={false}>
              <div
                className={cn(
                  "flex items-center gap-3 p-3 cursor-pointer hover:bg-accent",
                  index === highlightedIndex && "bg-accent"
                )}
                onMouseDown={() => handleSuggestionClick(product.slug)}
                role="option"
                aria-selected={index === highlightedIndex}
                id={`suggestion-${product.id}`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={40}
                  height={40}
                  className="rounded-md object-cover"
                />
                <div className="flex-grow">
                  <p className="font-medium text-foreground">{product.name}</p>
                  <p className="text-sm text-muted-foreground">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {showNoResultsMessage && (
        <div className="absolute top-full left-0 right-0 z-10 bg-popover border border-border rounded-md shadow-lg mt-1 p-3 text-center text-muted-foreground">
          No products found for &quot;{inputValue}&quot;.
        </div>
      )}
    </div>
  );
}