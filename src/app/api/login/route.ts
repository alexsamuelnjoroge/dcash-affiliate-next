import { NextRequest, NextResponse } from 'next/server';

type LoginResponse = {
  name: string;
  email: string;
  username: string;
  phoneNumber: string;
  signUps: number;
  deposits: number;
  withdrawals: number;
  balance: number;
  token: string;
};

const API_URL = process.env.API_URL || 'https://your-api.com';
const API_KEY = process.env.API_KEY || '';

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();

    if (typeof reqBody !== 'object' || reqBody === null) {
      return NextResponse.json(
        { message: 'Invalid request data', success: false },
        { status: 400 }
      );
    }

    const { email, password } = reqBody;

    if (typeof email !== 'string' || !email.trim()) {
      return NextResponse.json(
        { message: 'Email is required', success: false },
        { status: 400 }
      );
    }

    if (typeof password !== 'string' || !password.trim()) {
      return NextResponse.json(
        { message: 'Password is required', success: false },
        { status: 400 }
      );
    }

    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        origin: 'https://affiliate.dcash.africa'
      },
      credentials: 'include',
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        password
      })
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessages: Record<number, string> = {
        400: 'Invalid email or password format',
        401: 'Invalid credentials',
        403: 'Account access forbidden. Please contact support',
        404: 'Account not found',
        429: 'Too many login attempts. Please try again later',
        500: 'Server error. Please try again later'
      };

      const errorMessage = errorMessages[response.status] || 'Login failed. Please try again';

      return NextResponse.json(
        { message: errorMessage, success: false },
        { status: response.status }
      );
    }

    const user: LoginResponse = {
      name: data.name,
      email: data.email,
      username: data.username,
      phoneNumber: data.phone_number,
      signUps: data.sign_ups,
      deposits: data.deposits,
      withdrawals: data.withdrawals,
      balance: data.balance,
      token: data.token
    };

    const responseJson = NextResponse.json(
      { message: 'Login successful', data: user, success: true },
      { status: 200 }
    );

    responseJson.cookies.set('user_data', JSON.stringify(user), {
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60,
      sameSite: 'strict'
    });

    return responseJson;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'An unexpected error occurred', success: false },
      { status: 500 }
    );
  }
}
