import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-8">
      {/* Header section */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-4xl font-bold text-[#004C97] mb-2">
            Giuseppe Tardi
          </h1>
          <h2 className='text-2xl font-medium text-[#FF5800] italic'>
            Master's degree in Computer Science
          </h2>
        </div>
        <img
          src="/images/user.jpg"
          className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>

      {/* Content section */}
      <div className="space-y-8">
        <div className="bg-[#FF5800]/10 rounded-lg p-6 border-l-4 border-[#FF5800]">
          <p className="text-xl font-medium text-[#004C97]">
            Benvenuti nel mio personale sito web!
          </p>
        </div>

        {/* Main content paragraphs */}
        <div className="space-y-6 text-[#333]">
          <p className="text-lg leading-relaxed text-gray-700">
            Mi sono laureato in Informatica all'Università di Parma, dove ho coltivato la mia passione per la tecnologia, il problem-solving e l'innovazione. Sono una persona curiosa, determinata e sempre alla ricerca di nuove sfide, sia nel lavoro che nella vita privata.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Amo la logica e la creatività che stanno dietro allo sviluppo software, e mi piace lavorare in team dove posso condividere idee e imparare dagli altri. Sono appassionato di programmazione, sistemi informatici e tutto ciò che riguarda l'evoluzione digitale, ma credo anche nell'equilibrio tra lavoro e vita personale: nel tempo libero mi dedico al gaming, e allo sviluppo di progetti personali integrati all'interno di un raspberry pi.
          </p>

          <div className="bg-[#004C97]/10 p-6 rounded-lg border-l-4 border-[#004C97]">
          <p className="text-lg leading-relaxed text-[#004C97] font-medium">
              Se vuoi saperne di più su di me o sui miei progetti, contattami pure!
            </p>
          </div>
        </div>
      </div>

      {/* Blog posts section */}
      <div className="mt-16">
        <BlogPosts />
      </div>
    </section>
  )
}