import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Page
      </h1>
      <p className="mb-4">
        {`Hi there! I am a software developer and quant research developer based in NYC.
        As a recent grad, I hope to gain experiences and further my skills in these domains.
        I have worked on full stack development, as well as quantitative and data heavy projects.
        My stack so far: Python, JavaScript/TypeScript, React, C/C++, R, SQL, Postgres, GCP, AWS, Github CI/CD.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
