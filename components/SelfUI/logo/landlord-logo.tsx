import Image from 'next/image';
import darkThemeLogo from '@/public/logo/LandLordLogoDarkTheme.svg';
import { playFair } from '../fonts';
interface LogoProps {
  className?: string;
}

export function DarkThemeLogo({ className }: LogoProps) {
  return (
    <>
      <Image
        className={className}
        src={darkThemeLogo}
        alt=" DarkTheme Logo"
      />
    </>
  );
}
export function DarkThemeTextLogo({ className }: LogoProps) {
  return (
    <>
      <div className={`${playFair.className} ${className} whitespace-nowrap`}>L A N D L O R D</div>
    </>
  );
}
