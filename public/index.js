import { registerFooterComponent } from './components/footer/footer.js';
import { registerHeaderComponent } from './components/header/header.js';
import { registerIconComponent } from './components/icon/icon.js';

const app = () => {
  registerFooterComponent();
  registerHeaderComponent();
  registerIconComponent();
};

document.addEventListener('DOMContentLoaded', app);
