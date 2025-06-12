"use server";

import prisma from "@/lib/prisma";
import { Posts } from "@prisma/client";

export async function getPosts() {
  const posts = await prisma.posts.findMany();

  return posts;
}

export async function createPost({
  title,
  content,
  image,
  category,
}: Partial<Posts>): Promise<Posts | null> {
  if (!title || !content || !image) {
    throw new Error("Title, content, and image are required to create a post.");
  }
  const post = await prisma.posts.create({
    data: {
      title,
      content,
      image,
      category,
    },
  });
  return post;
}
