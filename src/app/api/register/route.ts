// /src/app/api/register/route.ts
//import { NextResponse } from 'next/server';

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, x-api-key',
      'Access-Control-Max-Age': '86400',
    },
  });
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const username = formData.get('username') as string;
    const email = formData.get('email') as string;
    const phoneNumber = formData.get('phoneNumber') as string;
    const idFront = formData.get('idFront') as File;
    const idBack = formData.get('idBack') as File;
    const profileImage = formData.get('profileImage') as File;

    const formattedUsername = username.toLowerCase().replace(/\s+/g, '');

    const apiFormData = new FormData();
    apiFormData.append('name', `${firstName} ${lastName}`);
    apiFormData.append('email', email);
    apiFormData.append('username', formattedUsername);
    apiFormData.append('phone_number', phoneNumber);
    apiFormData.append('id_front', idFront);
    apiFormData.append('id_back', idBack);
    apiFormData.append('profile', profileImage);

    const response = await fetch(`${process.env.API_BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'x-api-key': process.env.API_KEY!,
        origin: 'https://affiliate.dcash.africa'
      },
      body: apiFormData
    });

    const data = await response.json(); // ✅ now data is defined

    if (response.ok) {
      return new Response(JSON.stringify({
        success: true,
        message: data.message,
        data
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    } else {
      return new Response(JSON.stringify({
        success: false,
        message: data.message
      }), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }
  } catch (error: unknown) {
    return new Response(JSON.stringify({
      success: false,
      message: 'An unexpected error occurred during registration',
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
