import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cloudinary } from '@/lib/cloudinary';

export async function GET() {
  const services = await prisma.service.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(services);
}

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const title = data.get('title') as string;
  const description = data.get('description') as string;
  const isCode = data.get('isCode') as string;
  const file = data.get('image') as File;

  if (!title || !description || !isCode || !file) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const upload = await new Promise<any>((res, rej) =>
    cloudinary.uploader.upload_stream({ folder: 'services' }, (err, result) =>
      err ? rej(err) : res(result)
    ).end(buffer)
  );

  const service = await prisma.service.create({
    data: { title, description, isCode, image: upload.secure_url },
  });
  return NextResponse.json(service, { status: 201 });
}
