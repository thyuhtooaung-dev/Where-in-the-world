interface ImportMetaEnv {
  readonly VITE_COUNTRIES_API_URL: string;
  readonly VITE_COUNTRIES_API_FIELDS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
