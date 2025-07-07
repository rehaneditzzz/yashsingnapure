import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cloudinary } from '@/lib/cloudinary';

export async function PUT(req: NextRequest, context: { params: { id: string } }) {
  const id = context.params.id;
  const formData = await req.formData();

  const name = formData.get('name') as string;
  const tech = (formData.get('tech') as string)?.split(',').map(t => t.trim());
  const live = formData.get('live') as string;
  const code = formData.get('code') as string;
  const file = formData.get('image') as File | null;

  let img: string | undefined;

  if (file && file.size > 0) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const upload: any = await new Promise((res, rej) =>
      cloudinary.uploader.upload_stream(
        { folder: 'portfolio_projects' },
        (err, result) => (err ? rej(err) : res(result))
      ).end(buffer)
    );

    img = upload.secure_url;
  }

  const updated = await prisma.project.update({
    where: { id },
    data: {
      name,
      tech,
      live,
      code,
      ...(img && { img }),
    },
  });

  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
  const id = context.params.id;
  await prisma.project.delete({ where: { id } });
  return NextResponse.json({ message: 'Deleted' });
}
