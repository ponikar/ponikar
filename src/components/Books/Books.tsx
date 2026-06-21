import { FC } from "react";
import Image from "next/image";
import styles from "./Books.module.css";

const books = [
  { title: "The Almanack of Naval Ravikant", author: "Eric Jorgenson", note: "Wealth and happiness as systems, not goals. I keep coming back to this one.", color: "#4ADE80", cover: "https://covers.openlibrary.org/b/isbn/9781544514222-M.jpg" },
  { title: "Zero to One", author: "Peter Thiel", note: "The only startup book that changed how I actually think about competition.", color: "#60A5FA", cover: "https://covers.openlibrary.org/b/isbn/9780804139298-M.jpg" },
  { title: "The Hard Thing About Hard Things", author: "Ben Horowitz", note: "No platitudes. Just the actual difficulty of building, written honestly.", color: "#F472B6", cover: "https://covers.openlibrary.org/b/isbn/9780062273208-M.jpg" },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", note: "Changed how I think about my own decisions, especially under pressure.", color: "#FBBF24", cover: "https://covers.openlibrary.org/b/isbn/9780374533557-M.jpg" },
  { title: "The Mom Test", author: "Rob Fitzpatrick", note: "Short, dense, and it fixed how I talk to users. Should be required reading.", color: "#C084FC", cover: "https://covers.openlibrary.org/b/isbn/9781492180746-M.jpg" },
  { title: "Deep Work", author: "Cal Newport", note: "The rooftop cafe runs on this philosophy. Distraction is the real enemy.", color: "#FB923C", cover: "https://covers.openlibrary.org/b/isbn/9781455586691-M.jpg" },
];

export const Books: FC = () => {
  return (
    <section id="books" className={styles.section}>
      <p className={styles.label}><span>05</span>Books</p>
      <div className={styles.grid}>
        {books.map((book, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.coverWrap}>
              <Image src={book.cover} alt={book.title} width={80} height={120} className={styles.cover} />
            </div>
            <p className={styles.title}>{book.title}</p>
            <p className={styles.author}>{book.author}</p>
            <p className={styles.note}>{book.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
