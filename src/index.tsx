import { createRoot } from 'react-dom/client';
import Root from './Clients/Root';

const container = document.getElementById('root') as Element | DocumentFragment;
const root = createRoot(container);
root.render(<Root />);
