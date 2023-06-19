import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  console.log('GET');

  const posts = await prisma.post.findMany();

  console.log({ posts });

  return new Response('All posts');
};

export const POST = async (req: NextRequest) => {
  console.log('POST');

  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  });

  const posts = await prisma.post.create({
    data: {
      title: 'test',
      content: 'content',
      published: false,
      authorId: user.id,
    },
  });

  console.log({ posts });

  return new Response('Post saved');
};
