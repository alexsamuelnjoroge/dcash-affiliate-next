// src/app/forgot-password/route.ts
import { NextRequest, NextResponse } from 'next/server';

const apiKey = process.env.API_KEY!;
const API_BASE_URL = process.env.API_BASE_URL || 'https://api.dcash.africa';
const RESET_PASSWORD_ENDPOINT = process.env.RESET_PASSWORD_ENDPOINT || 'auth/reset-password';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const email = body.email;

        if (!email) {
            return NextResponse.json({ message: 'Email is required' }, { status: 400 });
        }

        const response = await fetch(`${API_BASE_URL}/${RESET_PASSWORD_ENDPOINT}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                origin: 'https://affiliate.dcash.africa',
            },
            credentials: 'include',
            body: JSON.stringify({ email }),
        });

        const result = await response.json();

        if (response.status === 200) {
            return NextResponse.json({ success: true, message: result.message });
        } else {
            return NextResponse.json({ success: false, message: result.message }, { status: response.status });
        }
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}
