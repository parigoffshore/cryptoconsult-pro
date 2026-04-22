import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    const brevoApiKey = process.env.BREVO_API_KEY;
    const brevoListId = process.env.BREVO_LIST_ID;

    if (!brevoApiKey || !brevoListId) {
      console.error('Variables Brevo manquantes');
      return NextResponse.json(
        { error: 'Configuration serveur incorrecte' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': brevoApiKey,
      },
      body: JSON.stringify({
        email: email,
        listIds: [parseInt(brevoListId)],
        updateEnabled: true,
      }),
    });

    if (response.status === 200 || response.status === 201) {
      return NextResponse.json(
        { success: true, message: 'Email ajouté avec succès' },
        { status: 200 }
      );
    } else {
      const errorData = await response.json().catch(() => ({}));
      console.error('Erreur Brevo:', response.status, errorData);
      return NextResponse.json(
        { error: "Erreur lors de l'inscription" },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error('Erreur serveur:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
