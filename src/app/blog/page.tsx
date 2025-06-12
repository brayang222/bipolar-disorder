"use server";
import { createPost, getPosts } from "@/actions/blog";
import { blogPosts } from "@/utils/data";
import { formatDate } from "@/utils/formatDate";

const Blog = async () => {
  const posts = await getPosts();
  // console.log(posts);

  // const postCreated = await createPost({
  //   title: "Nuevo Post.",
  //   content: "Contenido del nuevo post.",
  //   image: "https://example.com/image.jpg",
  // });
  // console.log(postCreated);
  return (
    <div className="min-h-screen bg-background">
      {/* Improved Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/20 via-primary/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Blog de <span className="text-primary">Ánimo Bipolar</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comparte tus experiencias, consejos y recursos para entender y
              manejar el trastorno bipolar. Tu historia puede inspirar y ayudar
              a otros en su camino hacia el bienestar.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                // onClick={() => setSelectedPost(post)}
              >
                <div className="md:flex">
                  {/* Post Image */}
                  <div className="md:w-1/3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Post Content */}
                  <div className="md:w-2/3 p-6">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground space-x-4">
                        <div className="flex items-center">
                          {/* <User className="w-4 h-4 mr-1" /> */}
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          {/* <Calendar className="w-4 h-4 mr-1" /> */}
                          <span>{formatDate(post.date)}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-primary font-medium group-hover:text-primary/80">
                        Leer más
                        {/* <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
