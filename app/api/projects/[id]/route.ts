import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cloudinary } from '@/lib/cloudinary';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  const formData = await req.formData();
  const name = formData.get('name') as string;
  const tech = (formData.get('tech') as string)?.split(',').map((t) => t.trim());
  const live = formData.get('live') as string;
  const code = formData.get('code') as string;
  const image = formData.get('image') as File | null;

  if (!name || !tech || !live || !code) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  let imgUrl: string | undefined = undefined;

  if (image && image.size > 0) {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const upload = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: 'portfolio_projects' },
        function (error, result) {
          if (error) return reject(error);
          resolve(result);
        }
      ).end(buffer);
    });

    const result = upload as { secure_url: string };
    imgUrl = result.secure_url;
  }

  const updated = await prisma.project.update({
    where: { id },
    data: {
      name,
      tech,
      live,
      code,
      ...(imgUrl && { img: imgUrl }),
    },
  });

  return NextResponse.json(updated);
}
