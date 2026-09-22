import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.app_not_found;
import Link from 'next/link';
import { PageIntro } from '@/components/ui';
export default function NotFound() {
  return (
    <PageIntro
      eyebrow={copy['404_page_not_found']}
      title={copy['lets_get_you_back_on_track']}
      description={copy['this_page_is_not_available_find']}
    >
      <div className="button-row">
        <Link className="button" href="/">
          {copy['back_to_home']}
        </Link>
        <Link className="button secondary" href="/services/">
          {copy['explore_treatments']}
        </Link>
      </div>
    </PageIntro>
  );
}
