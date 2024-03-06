import Link from 'next/link';
import infosContents from '@/utils/InfosContents';
import SLinksFooterDiv from '@/app/styles/components-styles/SLinksFooter';

export default function LinksFooter() {
  return (
    <SLinksFooterDiv>
      <div id='link-content'>
        <h2 data-testid="title-link-footer">Lacrei Saúde</h2>

        {infosContents.first.map((item) => (
          <Link
            key={item}
            href='*'
            className='title-link'
            data-testid="links-content-first"
          >
            {item}
          </Link>
        ))}
      </div>

      <div id='link-content'>
        <h2 data-testid="title-link-footer">Saúde</h2>

        {infosContents.second.map((item) => (
          <Link
            key={item}
            href='*'
            className='title-link'
            data-testid="links-content-second"
          >
            {item}
          </Link>
        ))}
      </div>

      <div id='link-content'>
        <h2 data-testid="title-link-footer">Segurança e Privacidade</h2>

        {infosContents.third.map((item) => (
          <Link
            key={item}
            href='*'
            className='title-link'
            data-testid="links-content-third"
          >
            {item}
          </Link>
        ))}
      </div>
    </SLinksFooterDiv>
  );
};
