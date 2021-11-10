import React from 'react';
import { render } from '@testing-library/react';
import { BasicPost } from './post.composition';
import { act } from "react-dom/test-utils";

it('should render the post with data', () => {
  const data = {
    nickname:"Lee",
    avatar:"https://www.clipartmax.com/png/full/405-4050774_avatar-icon-flat-icon-shop-download-free-icons-for-avatar-icon-flat.png",
    image:"https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/pf-c5dcbf93--mothertreesblog.jpeg?v=1617378217",
    caption:"[inspirational quote here]",
    key:"a"
  }
  const { container } = render(<BasicPost />);
  expect(container).toBeTruthy();
  expect(container.querySelector('img').src).toContain(data.avatar);
  expect(container.querySelector('span').textContent).toContain(data.nickname);
  expect(container.querySelector('strong').textContent).toContain(data.nickname);
  expect(container.querySelectorAll('img')[1].src).toContain(data.image);
  expect(container.textContent).toContain(data.caption);
});