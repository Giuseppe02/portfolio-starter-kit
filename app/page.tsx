import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Giuseppe Tardi's portfolio
      </h1>
      <p className="mb-4">
        {`Benvenuti nel mio personal Portfolio web-site.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
