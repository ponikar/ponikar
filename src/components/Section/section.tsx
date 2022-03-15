import React, { CSSProperties, FC } from "react";

interface SectionProps {
  title: string;
  contentStyle?: CSSProperties;
  contentClassName?: string;
}
export const Section: FC<SectionProps> = ({
  title,
  children,
  contentClassName,
  contentStyle,
}) => {
  return (
    <div className="bg-gray-50">
      <section className="container py-12 mx-auto">
        <h4 className="sf text-5xl"> {title} </h4>
        <article style={contentStyle} className={`py-8 ${contentClassName}`}>
          {children}
        </article>
      </section>
    </div>
  );
};
