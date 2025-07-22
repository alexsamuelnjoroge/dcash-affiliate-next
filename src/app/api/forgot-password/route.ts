import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate request data
    if (typeof data !== 'object' || data === null) {
      return NextResponse.json(
        { message: 'Invalid request data', success: false },
        { status: 400 }
      );
    }

    const { email } = data;

    if (typeof email !== 'string' || !email.trim()) {
      return NextResponse.json(
        { message: 'Email is required', success: false },
        { status: 400 }
      );
    }

    // Make request to external API
    const response = await fetch(`${process.env.API_BASE_URL}/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.API_KEY || '',
        origin: process.env.ORIGIN || ''
      },
      credentials: 'include',
      body: JSON.stringify({
        email: email.trim().toLowerCase()
      })
    });

    const responseBody = await response.clone().text();
    console.log('Response status:', response.status);
    console.log('Response body:', responseBody);

    if (!response.ok) {
      const errorMessages: Record<number, string> = {
        400: 'Invalid email format',
        401: 'Unauthorized',
        403: 'Account access forbidden. Please contact support',
        404: 'Account not found',
        429: 'Too many password reset attempts. Please try again later',
        500: 'Server error. Please try again later'
      };

      const errorMessage =
        errorMessages[response.status] || 'Failed to send password reset email. Please try again.';

      return NextResponse.json(
        { message: errorMessage, success: false },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: 'Password reset email sent successfully', success: true },
      { status: 200 }
    );

  } catch (error) {
    console.error('Password reset error:', error);
    return NextResponse.json(
      { message: 'An unexpected error occurred', success: false },
      { status: 500 }
    );
  }
}

