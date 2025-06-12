import { blogPosts } from "@/utils/data";
import { formatDate } from "@/utils/formatDate";
import React, { useState } from "react";

export const selected = () => {
  const [selectedPost, setSelectedPost] = useState<
    (typeof blogPosts)[0] | null
  >(null);

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-background">
        {/* Article Content */}
        <article className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Article Image */}
            {selectedPost.image && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            )}

            <header className="mb-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
                  {selectedPost.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {selectedPost.title}
              </h1>
              <div className="flex items-center text-muted-foreground space-x-6">
                <div className="flex items-center">
                  {/* <User className="w-4 h-4 mr-2" /> */}
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center">
                  {/* <Calendar className="w-4 h-4 mr-2" /> */}
                  <span>{formatDate(selectedPost.date)}</span>
                </div>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                {selectedPost.excerpt}
              </p>
              <p className="text-foreground leading-relaxed">
                {selectedPost.content}
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  }
};
