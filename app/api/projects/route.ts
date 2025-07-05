import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cloudinary } from '@/lib/cloudinary';

export async function GET() {
  const projects = await prisma.project.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(projects);
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name = formData.get('name') as string;
  const tech = (formData.get('tech') as string).split(',').map(t => t.trim());
  const live = formData.get('live') as string;
  const code = formData.get('code') as string;
  const file = formData.get('image') as File;

  if (!file || !name || !tech || !live || !code) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
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

  const cloudinaryResult = upload as { secure_url: string };

  const newProject = await prisma.project.create({
    data: {
      name,
      tech,
      live,
      code,
      img: cloudinaryResult.secure_url,
    },
  });

  return NextResponse.json(newProject, { status: 201 });
}
