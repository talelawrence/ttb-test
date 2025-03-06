'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Layout from '../component/layout';
import StepOne from './seq/stepone';
import StepTwo from './seq/steptwo';
import StepThree from './seq/stepthree';
import ThankYouPage from './end/page';

export default function SurveyPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [canProceed, setCanProceed] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
  
    useEffect(() => {
      const seq = searchParams.get('seq');
      if (seq === '00002') setStep(2);
      if (seq === '00003') setStep(3);
    }, [searchParams]);
  
    const handleNextStep = () => {
      if (step === 3) {
        setShowThankYou(true);
      } else {
        setStep(step + 1);
      }
    };
  
    return (
      <Layout step={step} setStep={handleNextStep} canProceed={canProceed} showThankYou={showThankYou}>
        {showThankYou ? <ThankYouPage /> : (
          <>
            {step === 1 && <StepOne setCanProceed={setCanProceed} />}
            {step === 2 && <StepTwo setCanProceed={setCanProceed} />}
            {step === 3 && <StepThree setCanProceed={setCanProceed} />}
          </>
        )}
      </Layout>
    );
  }