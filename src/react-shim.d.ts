declare module "react" {
  export type PropsWithChildren<P = unknown> = P & { children?: any };
  export type AnchorHTMLAttributes<T = any> = Record<string, any>;
  export type ButtonHTMLAttributes<T = any> = Record<string, any>;
  export type MouseEvent<T = any> = any;
  export type FormEvent<T = any> = any;
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useMemo<T>(factory: () => T, deps?: any[]): T;
  export function useRef<T>(initialValue: T | null): { current: T | null };
  export function useState<T>(initialValue: T | (() => T)): [T, (value: T | ((previous: T) => T)) => void];
  const React: {
    StrictMode: any;
  };
  export default React;
}

declare module "react/jsx-runtime" {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module "react-dom/client" {
  export function createRoot(container: Element | DocumentFragment): {
    render(children: any): void;
  };
}

declare namespace JSX {
  interface IntrinsicAttributes {
    key?: any;
  }
  interface IntrinsicElements {
    [elementName: string]: any;
  }
}
