import { Suspense } from 'react';
import Result from '@/components/Result';

const ResultPage = () => {
  return (
    <Suspense fallback={<div>Loading result...</div>}>
      <Result />
    </Suspense>
  );
};

export default ResultPage;
