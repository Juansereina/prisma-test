import { postSchema } from '@/app/schema';
import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  const posts = await prisma.post.findMany();

  return new Response(JSON.stringify({ posts }));
};

export const POST = async (req: NextRequest) => {
  const postData = await req.json();
  const data = postSchema.parse(postData);
  const post = await prisma.post.create({
    data,
  });

  return new Response(JSON.stringify({ post }));
};
