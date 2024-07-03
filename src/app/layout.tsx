import "./globals.css";
import styles from "./page.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <video className={styles.videoBackground} autoPlay loop muted>
          <source src={"/bg-video.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {children}
      </body>
    </html>
  );
}
