import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ElementType,
} from "react";

type RevealProps<T extends ElementType = "div"> = {
  as?: T;
  delay?: number;
  children: React.ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "delay" | "children" | "className">;

export function Reveal<T extends ElementType = "div">({
  as,
  delay = 0,
  children,
  className = "",
  ...rest
}: RevealProps<T>) {
  const Component = (as || "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref as never}
      className={`transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Component>
  );
}
