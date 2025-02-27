export interface SearchBarHeaderProps {
  query: string;
  setQuery: (query: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
