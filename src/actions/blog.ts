"use server";

import prisma from "@/lib/prisma";
import { Posts } from "@prisma/client";

export async function getPosts() {
  return await prisma.posts.findMany({
    include: {
      author: true,
    },
  });
}

export async function createPost({
  title,
  content,
  image,
  category,
  authorId,
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
      authorId,
    },
  });
  return post;
}

export async function postFindOne(id: string) {
  const post = await prisma.posts.findUnique({
    where: {
      id: id,
    },
    include: {
      author: true,
    },
  });
  return post;
}
