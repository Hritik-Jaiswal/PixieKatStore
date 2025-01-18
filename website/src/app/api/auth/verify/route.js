import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    // Get token from cookies using Next.js 13 cookies API
    const token = cookies().get('token');
    console.log('Verifying token:', token ? 'Token exists' : 'No token found');

    if (!token) {
      return NextResponse.json(
        { error: 'No token found' },
        { status: 401 }
      );
    }

    const decoded = await verifyToken(token.value);
    console.log('Token verified successfully for user:', decoded.email);
    
    return NextResponse.json({
      user: {
        id: decoded.id,
        email: decoded.email,
        name: decoded.name,
      }
    });
  } catch (error) {
    console.error('Token verification failed:', error);
    // Clear the invalid token
    cookies().delete('token');
    
    return NextResponse.json(
      { error: 'Invalid token' },
      { status: 401 }
    );
  }
}
