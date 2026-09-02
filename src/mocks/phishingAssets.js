const files = import.meta.glob(
  "@/assets/general/phishing/*.jpg",
  { eager: true, query: "?url", import: "default" }
);

export const phishingImages = Object.keys(files).sort().map((k) => files[k]);