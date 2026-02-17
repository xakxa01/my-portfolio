/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLOUDINARY_CLOUD_NAME?: string;
  readonly VITE_CLOUDINARY_RESUME_PUBLIC_ID?: string;
  readonly VITE_CLOUDINARY_RESUME_RESOURCE_TYPE?: "image" | "raw" | "video";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
