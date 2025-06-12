import { blogPosts } from "@/utils/data";

export const BlogSection = () => {
  const latestBlogPosts = blogPosts.slice().reverse().slice(0, 3);

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">Últimas Entradas del Blog</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mantente informado con nuestros últimos artículos sobre manejo del
            ánimo y bienestar mental
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {latestBlogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    {/* <User className="w-4 h-4 mr-1" /> */}
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    {/* <Calendar className="w-4 h-4 mr-1" /> */}
                    {/* <span>{formatDate(post.date)}</span> */}
                  </div>
                </div>
                {/* <Link
                  to="/blog"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  Leer más
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link> */}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          {/* <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
          >
            Ver Todos los Artículos
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link> */}
        </div>
      </div>
    </section>
  );
};
