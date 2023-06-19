import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';
import { z } from 'zod';

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  console.log('GET');

  const posts = await prisma.post.findMany();

  console.log({ posts });

  return new Response('All posts');
};

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  const userParser = z.object({
    name: z.string(),
    email: z.string(),
  });
  const userData = userParser.parse(data);

  const user = await prisma.user.create({
    data: userData,
  });

  return new Response(JSON.stringify(user));
};
