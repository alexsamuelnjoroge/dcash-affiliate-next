// /app/api/get-profile-image/route.ts

import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const API_KEY = process.env.API_KEY!;
const ORIGIN = process.env.ORIGIN || 'https://affiliate.dcash.africa';

export async function GET() {
  try {
   const cookieStore = await cookies();
const userDataString = cookieStore.get('user_data')?.value;


    if (!userDataString) {
      return NextResponse.json(
        { success: false, error: 'User data not found' },
        { status: 401 }
      );
    }

    const user = JSON.parse(userDataString);
    const url = `https://api.dcash.africa/v1/affiliate/get-profile-picture/${user.email}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
        Authorization: user.token,
        origin: ORIGIN
      },
      credentials: 'include'
    });

    if (!response.ok) {
      console.error('API Response:', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers)
      });
      return NextResponse.json(
        {
          success: false,
          error: `API returned ${response.status}: ${response.statusText}`
        },
        { status: response.status }
      );
    }

    const contentType = response.headers.get('content-type') || 'image/jpeg';
    const imageBuffer = await response.arrayBuffer();
    const base64Image = Buffer.from(imageBuffer).toString('base64');

    return NextResponse.json({
      success: true,
      imageData: `data:${contentType};base64,${base64Image}`
    });
  } catch (error) {
    console.error('Error fetching profile image:', error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : 'Failed to fetch profile image'
      },
      { status: 500 }
    );
  }
}
