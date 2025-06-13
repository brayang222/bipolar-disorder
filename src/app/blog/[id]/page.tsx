import { postFindOne } from "@/actions/blog";
import { formatDate } from "@/utils/formatDate";

const page = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;

  const post = await postFindOne(id.toString());

  if (!post) {
    return <div className="text-center text-red-500">Post not found</div>;
  }

  console.log(post);
  return (
    <div className="min-h-screen bg-background">
      {/* Article Content */}
      <article className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Image */}
          {post.image && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          )}

          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-muted-foreground space-x-6">
              <div className="flex items-center">
                <i
                  className="icon-[tdesign--user] w-4 h-4 mr-2"
                  role="img"
                  aria-hidden="true"
                />
                <span>{post.author?.name}</span>
              </div>
              <div className="flex items-center">
                <i
                  className="icon-[tabler--calendar] w-4 h-4 mr-2"
                  role="img"
                  aria-hidden="true"
                />
                <span>{formatDate(post.createdAt.toISOString())}</span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {post.content.slice(0, 150)}
            </p>
            <p className="text-foreground leading-relaxed">{post.content}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default page;
