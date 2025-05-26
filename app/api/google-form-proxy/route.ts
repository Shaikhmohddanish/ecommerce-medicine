import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const url = 'https://script.google.com/macros/s/AKfycbwTGkISdNpa_zlNpHN_DmNaERhCjhHI8paMy80yH0-cd5I4lfQpRvIwNuO3le1DL4Jp/exec';

  const formData = await request.formData();
  const params = new URLSearchParams();
  for (const [key, value] of formData.entries()) {
    params.append(key, value as string);
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: 'Proxy failed', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
