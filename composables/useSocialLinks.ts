import { SocialLinksType } from '@/utils/types';
import { SOCIAL_LINKS } from '@/utils/consts';

export function useSocialLink(): SocialLinksType {
  return {
    ...SOCIAL_LINKS,
  };
}
