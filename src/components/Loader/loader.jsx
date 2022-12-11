import { ImSpinner } from 'react-icons/im';

export default function ImageLoader({ image }) {
  return (
    <div role="alert">
      <div>
        <ImSpinner size="32" />
        Завантажуємо...
      </div>
    </div>
  );
}
