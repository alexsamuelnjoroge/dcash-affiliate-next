import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
	try {
		const cookieStore = await cookies();

		// Clear the user_data cookie
		cookieStore.set({
			name: 'user_data',
			value: '',
			path: '/',
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'strict',
			expires: new Date(0) // Expire the cookie immediately
		});

		return NextResponse.json(
			{
				success: true,
				message: 'Successfully signed out'
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error('Sign out error:', error);
		return NextResponse.json(
			{
				success: false,
				message: 'Failed to sign out'
			},
			{ status: 500 }
		);
	}
}
