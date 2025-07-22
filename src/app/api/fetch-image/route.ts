// /src/app/api/fetch-image/route.ts

import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const path = url.searchParams.get('route');
  const cookieStore =  await cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    return new Response('Unauthorized', { status: 401 });
  }

  const headers = {
    'x-api-key': process.env.API_KEY!,
    Authorization: token,
    origin: 'https://www.dcash.africa'
  };

  let endpoint: string;

  switch (path) {
    case 'fetchFrontIdImage':
      endpoint = `${process.env.API_BASE_URL}/application/id-front`;
      break;
    case 'fetchBackIdImage':
      endpoint = `${process.env.API_BASE_URL}/application/id-back`;
      break;
    case 'fetchProfileImage':
      endpoint = `${process.env.API_BASE_URL}/application/profile`;
      break;
    default:
      return new Response('Invalid route', { status: 400 });
  }

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers
    });

    if (!response.ok) {
      console.error('API Response:', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers)
      });
      return new Response(`Failed to fetch image: ${response.statusText}`, {
        status: response.status
      });
    }

    const contentType = response.headers.get('content-type');
    const imageBuffer = await response.arrayBuffer();
    const base64Image = Buffer.from(imageBuffer).toString('base64');

    return new Response(
      JSON.stringify({
        success: true,
        imageData: `data:${contentType || 'image/jpeg'};base64,${base64Image}`
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error: unknown) {
    console.error('Error fetching image:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch image'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
