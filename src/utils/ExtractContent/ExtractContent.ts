export const extractContent = (htmlContent: string) => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;

  const heading = tempDiv.querySelector('h2')?.innerHTML || '';
  const headingH3 = tempDiv.querySelector('h3')?.innerHTML || '';
  const paragraph = tempDiv.querySelector('p')?.innerHTML || '';
  const imgSrc = tempDiv.querySelector('img')?.getAttribute('src') || '';
  const imgAlt = tempDiv.querySelector('img')?.getAttribute('alt') || 'image';

  const instagramLink = tempDiv.querySelector('h4 a[href*="instagram.com"]')?.getAttribute('href') || '';
  const telegramLink = tempDiv.querySelector('h4 a[href*="t.me"]')?.getAttribute('href') || '';

  return { heading, headingH3, paragraph, imgSrc, imgAlt, instagramLink, telegramLink };
  };
  