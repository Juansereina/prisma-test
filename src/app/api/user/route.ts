import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

export const GET = async () => {
  const users = await prisma.user.findMany();

  return new Response(JSON.stringify({ users }));
};

export const POST = async (req: Request) => {
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
