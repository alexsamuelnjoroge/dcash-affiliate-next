import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge'; // or 'nodejs' if needed

// Handle CORS Preflight
export async function OPTIONS(): Promise<Response> {
	return new Response(null, {
		status: 204,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'PUT, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-api-key',
			'Access-Control-Max-Age': '86400'
		}
	});
}

// Handle PUT request
export async function PUT(req: NextRequest): Promise<Response> {
	console.log('PUT request received to update application');

	try {
		const token = req.cookies.get('token')?.value;
		console.log('Token present:', !!token);

		if (!token) {
			console.log('Unauthorized: No token found');
			return NextResponse.json(
				{ success: false, message: 'Unauthorized' },
				{
					status: 401,
					headers: { 'Access-Control-Allow-Origin': '*' }
				}
			);
		}

		const formData = await req.formData();
		console.log(
			'Form data received:',
			Array.from(formData.keys())
		);

		const headers: HeadersInit = {
			Authorization: token,
			'x-api-key': process.env.API_KEY || '',
			origin: 'https://affiliate.dcash.africa'
		};
		console.log('Headers prepared:', headers);

		const response = await fetch(`${process.env.API_BASE_URL}/application`, {
			method: 'PUT',
			headers,
			body: formData
		});
		console.log('Response status:', response.status);

		const result = await response.json();
		console.log('Response body:', result);

		if (!response.ok) {
			console.error('API Error:', result);
			return NextResponse.json(
				{
					success: false,
					message: result.message || 'Failed to update application'
				},
				{
					status: response.status,
					headers: { 'Access-Control-Allow-Origin': '*' }
				}
			);
		}

		console.log('Request successful');
		return NextResponse.json(
			{
				success: true,
				message: result.message || 'Application updated successfully',
				data: result
			},
			{
				status: 200,
				headers: { 'Access-Control-Allow-Origin': '*' }
			}
		);
	} catch (error: unknown) {
		console.error('Server Error:', error);
		return NextResponse.json(
			{
				success: false,
				message: 'Internal Server Error',
				error: error instanceof Error ? error.message : 'Unknown error'
			},
			{
				status: 500,
				headers: { 'Access-Control-Allow-Origin': '*' }
			}
		);
	}
}
