import Link from 'next/link';
import infosContents from '@/utils/InfosContents';
import SLinksFooterDiv from '@/app/styles/components-styles/SLinksFooter';

export default function LinksFooter() {
  return (
    <SLinksFooterDiv>
      <div id='link-content'>
        <h2>Lacrei Saúde</h2>

        {infosContents.first.map((item) => (
          <Link key={item} href='*' className='title-link'>{ item }</Link>
        ))}
      </div>

      <div id='link-content'>
        <h2>Saúde</h2>

        {infosContents.second.map((item) => (
          <Link key={item} href='*' className='title-link'>{item}</Link>
        ))}
      </div>

      <div id='link-content'>
        <h2>Segurança e Privacidade</h2>

        {infosContents.third.map((item) => (
          <Link key={item} href='*' className='title-link'>{item}</Link>
        ))}
      </div>
    </SLinksFooterDiv>
  );
};
