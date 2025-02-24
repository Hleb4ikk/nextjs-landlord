'use server';

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const filesPaths = req.headers.get('files');

  if (filesPaths === null) return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  const files = JSON.parse(filesPaths);

  const res = await fetch('https://api.uploadthing.com/v6/deleteFiles', {
    method: 'POST',
    headers: {
      'X-Uploadthing-Api-Key': process.env.UPLOADTHING_TOKEN!,
    },
    body: JSON.stringify({
      files: files,
      fileKeys: [''],
      customIds: [''],
    }),
  });

  const data = await res.json();

  return NextResponse.json({ data });
}
