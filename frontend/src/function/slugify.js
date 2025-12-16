// src/utils/slugify.js
export function slugify(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')      // Replace spaces with -
    .replace(/[^\w-]+/g, '');  // Remove non-word characters
}
