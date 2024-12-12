import "server-only";

import Image from "next/image";
import styles from "../page.module.css";

async function getData(URL: string) {
  return fetch(URL);
}

async function fetchSomething() {
  const URL = `https://api.restful-api.dev/objects`;
  try {
    const fetchResult = getData(URL);
    const response = await fetchResult;
    if (response.ok) {
      const jsonData = await response.json();
    } else {
    }
  } catch (e) {}
}

export default async function Home() {
  await fetchSomething();
  await fetchSomething();
  await fetchSomething();
  await fetchSomething();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <ul>
          <li>
            Logs should always show <code>(cache skip)</code>
          </li>
        </ul>

      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

// export const dynamic = "force-dynamic";