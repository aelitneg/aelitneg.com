import Image from 'next/image'
import Markdown from 'react-markdown';
import styles from './page.module.css'
import { fetchAPI } from './utils/fetch-api';

export default async function Home() {
  const articles = await fetchAPI('/articles');
  console.log(articles[0])
  return (
    <main className={styles.main}>
      <h1>aelitneg.com</h1>

      {articles.map(({id, attributes}) => (
        <div key={id}>
          <h2>{attributes.title}</h2>
          <em>{new Date(attributes.publishedAt).toDateString()}</em>
          <Markdown>{attributes.text}</Markdown>
        </div>
      ))}
    </main>
  )
}
