import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name = 'Investisseur',
      email,
      phone = '',
      profile = 'Explorateur',
      capitalRange = '5 000 à 25 000 €',
      horizon = '1 à 3 ans',
      objective = 'Accumulation patrimoniale',
      priorityNeed = ''
    } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 });
    }

    // 1. Synchronisation avec Brevo (attributs enrichis)
    const brevoKey = process.env.BREVO_API_KEY;
    if (brevoKey) {
      try {
        await fetch('https://api.brevo.com/v3/contacts', {
          method: 'POST',
          headers: {
            'api-key': brevoKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            email,
            updateEnabled: true,
            attributes: {
              PRENOM: name,
              NOM: name,
              PROFIL: profile,
              PROFIL_CRYPTO: profile,
              CAPITAL_TRANCHE: capitalRange,
              HORIZON: horizon,
              SMS: phone || undefined
            }
          })
        });
      } catch (e) {
        console.error('[Brevo Simulateur] Erreur:', e);
      }
    }

    // 2. Relais serveur vers le CRM du Dashboard (admin.cryptoconsult.me/api/crm)
    try {
      const crmUrl = process.env.CRM_WEBHOOK_URL || 'https://admin.cryptoconsult.me/api/crm';
      await fetch(crmUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          source: 'Simulateur cryptoconsult.me',
          investorProfile: profile,
          capitalRange,
          holdings: `Objectif : ${objective} | Horizon : ${horizon}`,
          notes: `Priorité : ${priorityNeed}`
        })
      });
    } catch (_) {}

    return NextResponse.json({ success: true, profile });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Erreur serveur' }, { status: 500 });
  }
}
