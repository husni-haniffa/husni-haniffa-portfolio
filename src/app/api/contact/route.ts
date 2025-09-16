import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();
    
    // Log the received data (you can remove this in production)
    console.log('Contact form data received:', data);
    
    // Here you can add validation if needed
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    
    // Send the data back as response
    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! I\'ll get back to you soon.',
      data: data
    });
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
