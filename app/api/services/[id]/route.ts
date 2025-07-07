import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cloudinary } from '@/lib/cloudinary';

// ✅ Correct type expected by Next.js for route handlers
type RouteContext = {
  params: {
    id: string;
  };
};

export async function DELETE(req: NextRequest, context: RouteContext) {
  const { id } = context.params;

  await prisma.service.delete({ where: { id } });
  return NextResponse.json({ message: 'Deleted' });
}

export async function PUT(req: NextRequest, context: RouteContext) {
  const { id } = context.params;
  const data = await req.formData();

  const title = data.get('title') as string;
  const description = data.get('description') as string;
  const isCode = data.get('isCode') as string;
  const file = data.get('image') as File | null;

  let imageUrl: string | undefined;

  if (file && file.size > 0) {
    const buffer = Buffer.from(await file.arrayBuffer());

    const upload: any = await new Promise((res, rej) =>
      cloudinary.uploader.upload_stream(
        {
          folder: 'services',
          resource_type: 'image',
          format: 'webp',
          transformation: [{ quality: 'auto' }],
        },
        (err, result) => (err ? rej(err) : res(result))
      ).end(buffer)
    );

    imageUrl = upload.secure_url;
  }

  const updated = await prisma.service.update({
    where: { id },
    data: {
      title,
      description,
      isCode,
      ...(imageUrl && { image: imageUrl }),
    },
  });

  return NextResponse.json(updated);
}
