import { JSONContent } from "novel";

/**
 * Recursively converts JSONContent to an HTML string.
 * @param json - The JSONContent to be converted.
 * @returns A string representing the equivalent HTML.
 */
export const convertJSONToHTML = (json: JSONContent): string => {
  if (!json || !json.type) {
    return ""; // Handle empty or invalid input
  }

  // Handle text nodes
  if (json.type === "text") {
    return json.text || "";
  }

  // Handle element nodes with children
  const childrenHTML = json.content
    ? json.content.map((child) => convertJSONToHTML(child)).join("")
    : "";

  // Construct the HTML tag with attributes if available
  const attributes = json.attrs
    ? Object.entries(json.attrs)
        .map(([key, value]) => `${key}="${value}"`)
        .join(" ")
    : "";

  // Return the complete HTML string for this node
  return `<${json.type} ${attributes}>${childrenHTML}</${json.type}>`;
};
