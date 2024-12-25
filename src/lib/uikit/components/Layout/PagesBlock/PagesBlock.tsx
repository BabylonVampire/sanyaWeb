import React, { FC, ReactNode } from "react";
import styles from "./PagesBlock.module.scss";
import { links } from "../Layout.constants";

interface PageProps {
  className?: string;
  children?: ReactNode;
}

export const PagesBlock: FC<PageProps> = ({ className, children }) => {
  return (
    <div className={`${styles.pageblock} ${className}`}>
      {links.map((link, index) => (
        <a key={index} className={styles.page} href={link.link}>
          {link.title}
          {children}
        </a>
      ))}
    </div>
  );
};
