import { assetPath } from '@/lib/paths';

export const zirconiaCrownPhotos = [
  {
    src: assetPath('/images/crowns/anterior-zirconia-bridge.webp'),
    alt: 'Anterior zirconia bridge displayed on a dental model',
    caption: 'Anterior zirconia bridge',
    position: '50% 58%',
  },
  {
    src: assetPath('/images/crowns/posterior-zirconia-crowns.webp'),
    alt: 'Posterior zirconia crowns displayed on dental models',
    caption: 'Posterior zirconia crowns',
    position: '50% 50%',
  },
  {
    src: assetPath('/images/crowns/zirconia-bridge.webp'),
    alt: 'Multi-unit zirconia dental bridge viewed outside the mouth',
    caption: 'Multi-unit zirconia bridge',
    position: '50% 50%',
  },
  {
    src: assetPath('/images/crowns/crown-bridge-fit.webp'),
    alt: 'Zirconia crown and bridge seated on a dental model',
    caption: 'Crown and bridge fit',
    position: '50% 50%',
  },
  {
    src: assetPath('/images/crowns/anterior-restoration-view.webp'),
    alt: 'Clinical comparison view used when planning an anterior dental restoration',
    caption: 'Anterior restoration planning',
    position: '50% 50%',
  },
  {
    src: assetPath('/images/crowns/zirconia-shade-detail.webp'),
    alt: 'Zirconia crown held beside natural front teeth for shade assessment',
    caption: 'Shade and translucency detail',
    position: '50% 48%',
  },
  {
    src: assetPath('/images/crowns/anterior-crowns-clinical.webp'),
    alt: 'Clinical close-up of anterior dental crowns',
    caption: 'Anterior crowns — clinical view',
    position: '50% 50%',
  },
] as const;
