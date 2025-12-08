import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3001';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Forward request to backend
    const response = await fetch(`${BACKEND_URL}/api/save-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error || 'Failed to save email' }, 
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to beta program'
    });

  } catch (error) {
    console.error('Subscription failed:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' }, 
      { status: 500 }
    );
  }
}
