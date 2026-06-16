import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, profile } = body;

    let driveFileId = "";
    let profileTitle = "";
    let customParagraphs = "";

    // 1. Définition des variables et du texte personnalisé selon le profil
    switch (profile) {
      case "Conservateur":
        driveFileId = "1-DYPAgGY2Npo-PA1WbyDHcS-8P_Xl6c5";
        profileTitle = "Conservateur / Auto-Garde";
        customParagraphs = `
          <p>Ce résultat met en évidence des failles structurelles dans votre approche actuelle de l'écosystème crypto. Qu'il s'agisse de la sécurité de vos points d'accès, de l'absence de sauvegarde physique ou d'un manque de stratégie de gestion du risque, ces vulnérabilités exposent directement votre capital — parfois sans que vous en ayez conscience.</p>
          <p>Un profil Conservateur en auto-garde, c'est souvent un investisseur rigoureux dans ses intentions, mais insuffisamment armé face aux scénarios que l'on ne voit jamais venir : perte de seed phrase, mauvaise configuration de wallet, absence de plan de sortie documenté.</p>
          <p>Ce n'est pas une fatalité. C'est précisément ce que je corrige avec mes clients.</p>
        `;
        break;

      case "Explorateur":
        driveFileId = "1Tflt7NjCt_4sDoHQ_ZG7IZrBsWDlnKbr";
        profileTitle = "Explorateur / Web3";
        customParagraphs = `
          <p>Ce résultat met en évidence des failles structurelles dans votre approche actuelle de l'écosystème crypto. Qu'il s'agisse de vos interactions avec de multiples smart contracts, de la dilution de votre capital sur des protocoles expérimentaux ou d'un manque d'hygiène numérique, ces vulnérabilités exposent directement vos fonds.</p>
          <p>Un profil Explorateur, c'est souvent un investisseur curieux et proactif, mais qui s'expose à des risques technologiques majeurs que l'on a tendance à sous-estimer : hacks de bridges, interactions avec des protocoles malicieux, ou encore l'accumulation d'approbations infinies sur vos portefeuilles (MetaMask, Rabby).</p>
          <p>Ce n'est pas une fatalité. C'est précisément ce que je sécurise avec mes clients.</p>
        `;
        break;

      case "Speculateur":
        driveFileId = "1w9P2PTaZSVtMF7wDrYFjszZLeAvhDMvZ";
        profileTitle = "Spéculateur / Extraction de Valeur";
        customParagraphs = `
          <p>Ce résultat met en évidence des failles structurelles dans votre approche actuelle de l'écosystème crypto. Qu'il s'agisse de votre exposition à la volatilité sans filet de sécurité, de la conservation de vos liquidités sur des plateformes centralisées à risque, ou d'un manque de stratégie de sortie claire, ces vulnérabilités exposent directement vos gains.</p>
          <p>Un profil Spéculateur, c'est souvent un investisseur réactif et axé sur le rendement, mais qui se heurte aux pièges classiques du marché : surexposition émotionnelle, absence de prise de profit (take-profit) mathématique et mauvaise gestion du risque (risk-management).</p>
          <p>Ce n'est pas une fatalité. C'est précisément ce que je structure avec mes clients.</p>
        `;
        break;

      default:
        // Valeur par défaut en cas d'erreur de lecture
        driveFileId = "1-DYPAgGY2Npo-PA1WbyDHcS-8P_Xl6c5";
        profileTitle = "Conservateur / Auto-Garde";
        customParagraphs = `
          <p>Ce résultat met en évidence des failles structurelles dans votre approche actuelle de l'écosystème crypto. Qu'il s'agisse de la sécurité de vos points d'accès, de l'absence de sauvegarde physique ou d'un manque de stratégie de gestion du risque, ces vulnérabilités exposent directement votre capital — parfois sans que vous en ayez conscience.</p>
          <p>Un profil Conservateur en auto-garde, c'est souvent un investisseur rigoureux dans ses intentions, mais insuffisamment armé face aux scénarios que l'on ne voit jamais venir : perte de seed phrase, mauvaise configuration de wallet, absence de plan de sortie documenté.</p>
          <p>Ce n'est pas une fatalité. C'est précisément ce que je corrige avec mes clients.</p>
        `;
    }

    const pdfDirectLink = `https://drive.google.com/uc?export=download&id=${driveFileId}`;

    // 2. Assemblage du modèle d'email final avec la couleur de votre marque
    const emailHtmlContent = `
      <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 30px; border-radius: 8px;">
        <p>Bonjour,</p>
        <p>L'analyse de vos réponses au simulateur est terminée.<br>
        Votre profil d'investisseur a été identifié : <strong>${profileTitle}</strong>.</p>
        
        ${customParagraphs}
        
        <p>Votre Plan d'Action Personnalisé a été généré sur la base de vos réponses. Il détaille les points de vulnérabilité identifiés et les premières mesures à mettre en place pour sécuriser et structurer votre position.</p>
        <p>Vous pouvez le télécharger via l'accès sécurisé ci-dessous :</p>
        
        <p style="text-align: center; margin: 35px 0;">
          <a href="${pdfDirectLink}" style="background-color: #d4af37; color: #000; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 4px; display: inline-block;">👉 Télécharger mon Plan d'Action</a>
        </p>
        
        <p>Ce document est un point de départ — pas une fin en soi.</p>
        <p>Si vous souhaitez aller plus loin et mettre en place une stratégie réellement adaptée à votre situation, votre horizon et vos objectifs, je vous invite à réserver un appel de découverte. C'est gratuit, sans engagement, et cela vous donnera une vision claire de ce que vous devriez faire — et dans quel ordre.</p>
        
        <p style="text-align: center; margin: 35px 0;">
          <a href="https://calendly.com/davidcrypto507/30min" style="background-color: #111; color: #d4af37; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 4px; border: 1px solid #d4af37; display: inline-block;">📞 Réserver mon appel stratégique</a>
        </p>
        
        <p>À très vite,</p>
        <p><strong>David — Crypto Consult Pro</strong><br>
        <a href="https://cryptoconsult.me" style="color: #d4af37; text-decoration: none;">cryptoconsult.me</a></p>
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
        subject: "Votre Diagnostic Crypto & Plan d'Action (Action Requise)",
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
    console.error("Erreur critique Route API:", error);
    return NextResponse.json({ error: "Erreur serveur interne" }, { status: 500 });
  }
}
