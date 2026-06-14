import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, profile } = body;

    let driveFileId = "";
    let profileTitle = "";

    switch (profile) {
      case "Conservateur":
        driveFileId = "1-DYPAgGY2Npo-PA1WbyDHcS-8P_Xl6c5";
        profileTitle = "Conservateur / Auto-Garde";
        break;
      case "Explorateur":
        driveFileId = "1Tflt7NjCt_4sDoHQ_ZG7IZrBsWDlnKbr";
        profileTitle = "Explorateur / Web3";
        break;
      case "Speculateur":
        driveFileId = "1w9P2PTaZSVtMF7wDrYFjszZLeAvhDMvZ";
        profileTitle = "Spéculateur / Extraction de Valeur";
        break;
      default:
        driveFileId = "1-DYPAgGY2Npo-PA1WbyDHcS-8P_Xl6c5";
        profileTitle = "Conservateur / Auto-Garde";
    }

    const pdfDirectLink = `https://drive.google.com/uc?export=download&id=${driveFileId}`;

    cost emailHtmlContent = `
      <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px;">
        <p>Bonjour,</p>
        <p>L'analyse de vos réponses au simulateur est terminée. Votre profil d'investisseur a été identifié comme : <strong>${profileTitle}</strong>.</p>
        <p>Ce résultat met en évidence des failles structurelles dans votre approche actuelle de l'écosystème crypto. Qu'il s'agisse de la sécurité de vos points d'accès, de l'absence de garde physique ou d'un manque de stratégie mathématique, ces vulnérabilités exposent directement votre capital.</p>
        <p>Pour corriger cela, j'ai généré votre <strong>Plan de Sortie sur mesure</strong>. Vous pouvez le télécharger via l'accès sécurisé ci-dessous :</p>
        <p style="text-align: center; margin: 30px 0;">
          <a href="${pdfDirectLink}" style="background-color: #d4af37; colorpx; text-decoration: none; font-weight: bold; border-radius: 4px; display: inline-block;">Télécharger mon Plan de Sortie (PDF)</a>
        </p>
        <p><strong>La prochaine étape : L'Exécution.</strong></p>
        <p>Ce guide vous fournit la théorie. Cependant, la mise en place d'un tel système exige une rigueur technique absolue pour éviter toute perte de fonds irréversible.</p>
        <p>Vous disposez d'une fenêtre de 48 heures pour réserver un appel de découverte stratégique. Cet appel nous permettra d'auditer vos positions actuelles et de planifier l'intégration de votre nouvelle infrastructure.</p>
        <p style="text-align: center; margin: 30px 0;">
          <a href="https://calendly.com/davidcrypto507/30min" style="background-color: #111; color: #d4af37; padding: 14px 24px; text-decoration: none; font-weight: bold; border-radius: 4px; border: 1px solid #d4af37; display: inline-block;">Réserver mon audit d'implémentation</a>
        </p>
        <p>Cordialement,</p>
        <p>strong><br>Fondateur de Crypto Consult Pro<br>cryptoconsultme@gmail.com | +230 5474-1839</p>
      </div>
    `;

    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY as string,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: { name: "David | Crypto Consult Pro", email: "cryptoconsultme@gmail.com" },
        to: [{ email: email }],
        subject: "Votre Diagnostic Crypto & Plan de Sortie (Action Requise)",
        htmlContent: emailHtmlContent
      })
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.text();
      console.error("Erreur API Brevo:", errorData);
      throw new Error("Échec de l'envoi de l'email via Brevo");
    }

    return NextResponse.json({ success: true, message: "Email envoyé avec succès." });

  } catch (error) {
    console.error("Erreur critique Route :", error);
    return NextResponse.json({ error: "Erreur serveur interne" }, { status: 500 });
  }
}
