// Scripts
import { getPageInfo, getPartialsAsArray } from '@/scripts/page-info';
// Interfaces
import { PageInfo, PagePartialGroup } from '@/interfaces/page-info';
// Data
import learningAtSitecore from '@/data/promos/learning-at-sitecore';
// Components
import GenericContentPage from '@/components/layout/GenericContentPage';

export async function getStaticProps() {
  const pageInfo = await getPageInfo('learn');
  const integrations = await getPartialsAsArray([
    'learn/integrations/cdp',
    'learn/integrations/xm',
    'learn/integrations/content-hub',
    'learn/integrations/send',
    'learn/integrations/orderCloud'
  ]);

  const partialGroups = [
    {
      title: 'Integrations',
      description:
        'Do you want to see how you can integrate the different Sitecore products today? These integration guides will get you started leveraging the power of multiple products.',
      partials: integrations,
    },
  ];

  return {
    props: {
      pageInfo,
      partialGroups,
    },
  };
}

type LearnPageProps = {
  pageInfo: PageInfo;
  partialGroups: PagePartialGroup[];
};

const LearnPage = ({ pageInfo, partialGroups }: LearnPageProps): JSX.Element => (
  <GenericContentPage
    pageInfo={pageInfo}
    partialGroups={partialGroups}
    hasGrid={true}
    promoAfter={[learningAtSitecore]}
  />
);

export default LearnPage;
