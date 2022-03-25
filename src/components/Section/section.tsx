import React, { CSSProperties, FC, HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  contentStyle?: CSSProperties;
  contentClassName?: string;
}
export const Section: FC<SectionProps> = ({
  title,
  children,
  contentClassName,
  contentStyle,
  ...rest
}) => {
  return (
    <div className="bg-gray-50" {...rest}>
      <section className="container py-12 mx-auto">
        <h4 className="sf text-5xl"> {title} </h4>
        <article style={contentStyle} className={`py-8 ${contentClassName}`}>
          {children}
        </article>
      </section>
    </div>
  );
};
