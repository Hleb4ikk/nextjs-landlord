'use server';

export async function deleteFiles(files_keys: string[]) {
  console.log('to_delete', files_keys);
  const res = await fetch('https://api.uploadthing.com/v6/deleteFiles', {
    method: 'POST',
    headers: {
      'X-Uploadthing-Api-Key': process.env.UPLOADTHING_SECRET!,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fileKeys: files_keys,
    }),
  });
  if (res.ok === true) console.log('Files deleted: ', await res.json());
  else console.log('Error deleting files: ', await res.json());
}
