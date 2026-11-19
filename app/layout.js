import Link from "next/link";
import "./globals.css";
import { GITHUB_REPO_URL, SITE_TITLE } from "./siteConfig";

export const metadata = {
  title: SITE_TITLE,
  description: "Counter, GitHub link and store pages built with Next.js and React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link href="/" className="brand">{SITE_TITLE}</Link>
          <nav>
            <Link href="/count">Count</Link>
            <Link href="/githublink">GitHub Link</Link>
            <Link href="/store">Store</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          Source code on <a href={GITHUB_REPO_URL}>GitHub</a>
        </footer>
      </body>
    </html>
  );
}
