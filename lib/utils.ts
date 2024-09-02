import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const copyTable = () => {
  const elTable = document.querySelector("table") as any;

  let range, sel;

  // Ensure that range and selection are supported by the browsers
  if (document.createRange && window.getSelection) {
    range = document.createRange();
    sel = window.getSelection();
    // unselect any element in the page
    sel?.removeAllRanges();

    try {
      range.selectNodeContents(elTable);
      sel?.addRange(range);
    } catch (e) {
      range.selectNode(elTable);
      sel?.addRange(range);
    }

    document.execCommand("copy");
  }

  sel?.removeAllRanges();

  console.log("Element Copied! Paste it in a file");
};