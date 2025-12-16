// utils/readingTime.js
export function getReadingTime(text) {
  if (!text) return '0 min read';

  const wordsPerMinute = 200; // average reading speed
  const words = text.trim().split(/\s+/).length; // split by spaces
  const time = Math.ceil(words / wordsPerMinute);

  return `${time} min read`;
}
