// Image module declarations for TypeScript
declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module 'figma:asset/*' {
  const src: string;
  export default src;
}

