import {renderHook} from '@testing-library/react-hooks';
import {useAnimation} from '../../src/hooks/useAnimation';
// import renderer from 'react-test-renderer';

test('useAnimation works', () => {
  const {result} = renderHook(() => useAnimation());
  expect(result.current.fadeIn).toBeTruthy();
});
