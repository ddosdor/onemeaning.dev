import { SocialLinksType } from '@/utils/types';
import { SOCIAL_LINKS } from '@/utils/consts';

export const useSocialLink = (): SocialLinksType => ({
  ...SOCIAL_LINKS,
});
