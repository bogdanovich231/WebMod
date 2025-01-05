export const extractContent = (htmlContent: string) => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;

  const heading = tempDiv.querySelector('h2')?.innerHTML || '';
  const headingH3 = tempDiv.querySelector('h3')?.innerHTML || '';
  const paragraph = tempDiv.querySelector('p')?.innerHTML || '';
  const imgSrc = tempDiv.querySelector('img')?.getAttribute('src') || '';
  const imgAlt = tempDiv.querySelector('img')?.getAttribute('alt') || 'image';
  const images = tempDiv.querySelectorAll('img');
  const imgSrc2 = images[1]?.getAttribute('src') || '';
  const instagramLink = tempDiv.querySelector('h4 a[href*="instagram.com"]')?.getAttribute('href') || '';
  const telegramLink = tempDiv.querySelector('h4 a[href*="t.me"]')?.getAttribute('href') || '';

  return { heading, headingH3, paragraph, imgSrc, imgAlt, imgSrc2,  instagramLink, telegramLink };
  };
  
  export function extractStackList(htmlContent: string) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
  
    const section = Array.from(tempDiv.querySelectorAll('h2'))
      .find(h2 => h2.innerText.trim() === 'Stack');
  
    if (!section) {
      return []; 
    }
  
    const ul = section.closest('div')?.querySelector('ul.wp-block-list');
    
    const stacks = Array.from(ul?.querySelectorAll('li') || []).map(li => li.innerText.trim());
    return stacks;
  }