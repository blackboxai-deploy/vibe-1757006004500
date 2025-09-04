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
            content: 'You are an expert executive assistant. Draft a professional and context-aware reply to the following email. Adapt to a formal and efficient communication style suitable for an executive. The reply should be ready to be reviewed, edited, and sent.',
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
      return NextResponse.json({ error: 'Failed to get draft from AI model', details: errorText }, { status: response.status });
    }

    const data = await response.json();
    const draft = data.choices[0]?.message?.content;

    if (!draft) {
      return NextResponse.json({ error: 'No draft received from AI model' }, { status: 500 });
    }

    return NextResponse.json({ draft });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
