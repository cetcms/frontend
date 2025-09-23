import HCaptcha from '@hcaptcha/react-hcaptcha';
import React from 'react';
import { useThemeMode } from 'src/hooks';

export type CaptchaProps = {
  onCompleted?: (token: string, eKey: string) => void;
};

export function Captcha({ onCompleted }: CaptchaProps) {
  const themeMode = useThemeMode();
  const handleVerificationSuccess = (token: string, eKey: string) => {
    onCompleted?.(token, eKey);
  };
  return (
    <HCaptcha
      languageOverride="zh"
      theme={themeMode}
      sitekey="fdb25f96-0c32-4cb0-aa6e-9b6c12c8cfb8"
      onVerify={handleVerificationSuccess}
    />
  );
}
