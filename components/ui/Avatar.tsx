interface AvatarProps {
  children: React.ReactNode;
  className?: string; // className es opcional
}

export function Avatar({ children, className }: AvatarProps) {
  return <div className={`rounded-full overflow-hidden ${className}`}>{children}</div>;
}

interface AvatarImageProps {
  src: string;
  alt: string;
}

export function AvatarImage({ src, alt }: AvatarImageProps) {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />;
}

interface AvatarFallbackProps {
  children: React.ReactNode;
}

export function AvatarFallback({ children }: AvatarFallbackProps) {
  return <div className="flex items-center justify-center w-full h-full bg-gray-200">{children}</div>;
}