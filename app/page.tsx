import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
        Giuseppe Tardi
      </h1>
      <h2 className='mb-8 text-2xl font-italic tracking-tighter'>
        Master degree in Computer science
      </h2>
      <p className="mb-4">
        {`Benvenuti nel mio personale sito web.
        Mi sono laureato in Informatica all’Università di Parma, dove ho coltivato la mia passione per la tecnologia, il problem-solving e l’innovazione. Sono una persona curiosa, determinata e sempre alla ricerca di nuove sfide, sia nel lavoro che nella vita privata.
        
        Amo la logica e la creatività che stanno dietro allo sviluppo software, e mi piace lavorare in team dove posso condividere idee e imparare dagli altri. Sono appassionato di programmazione, sistemi informatici e tutto ciò che riguarda l’evoluzione digitale, 
        ma credo anche nell’equilibrio tra lavoro e vita personale: nel tempo libero mi dedico al gaming, e allo sviluppo di progetti personale integrati all'interno di un raspberry pi.
        
        Se vuoi saperne di più su di me o sui miei progetti, contattami pure!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
