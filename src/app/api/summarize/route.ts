
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { content } = await req.json();

    if (!content) {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 });
    }

    const response = await fetch('https://oi-server.onrender.com/chat/completions', {
      method: 'POST',
      headers: {
        'customerId': 'andre@cohesionx.co.za',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer xxx',
      },
      body: JSON.stringify({
        model: 'openrouter/anthropic/claude-3.5-sonnet',
        messages: [
          {
            role: 'system',
            content: 'You are an expert executive assistant. Summarize the following email content into concise bullet points, highlighting key information and any action items. The summary should be clear, professional, and easy to read.',
          },
          {
            role: 'user',
            content: content,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API error:", errorText)
      return NextResponse.json({ error: 'Failed to get summary from AI model', details: errorText }, { status: response.status });
    }

    const data = await response.json();
    const summary = data.choices[0]?.message?.content;

    if (!summary) {
      return NextResponse.json({ error: 'No summary received from AI model' }, { status: 500 });
    }

    return NextResponse.json({ summary });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
