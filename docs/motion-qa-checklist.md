# Motion QA Checklist

## Desktop
- Chrome: transitions inter-pages fluides, pas de sauts de layout.
- Edge: navbar/footer stables pendant les transitions.
- Firefox: animation sections + hover cards cohérents.

## Mobile
- iPhone 12 (390px): menu mobile, overlays et scroll corrects.
- Android 360px: CTA, grilles et focus visibles sans chevauchement.
- Vérifier que le menu mobile se ferme au changement de route.

## Accessibilité
- `prefers-reduced-motion` actif: pas de déplacement/stagger/page-transition.
- Navigation clavier: focus visible sur boutons, liens, burger menu.
- Liens sociaux et actions principales avec labels ARIA.

## Performance
- Hero en priorité de chargement.
- Images hors viewport en `loading="lazy"` + `decoding="async"` (images seulement).
- Vérifier baisse de poids après `npm run optimize:images`.

## Régression fonctionnelle
- Routes publiques: `/`, `/about`, `/activities`, `/join`, `/gallery`, `/support`, `/media`.
- Liens externes: Instagram, Google Maps, PayPal.
- Coordonnées affichées cohérentes entre Footer et JoinUs.
