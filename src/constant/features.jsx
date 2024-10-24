import {
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline/index.js";

export const features = [
  {
    name: "Enhanced Performance",
    description: "Benefit from fast load times and high availability.",
    icon: (
      <CloudArrowUpIcon aria-hidden="true" className="h-6 w-6 text-white" />
    ),
  },
  {
    name: "SSL Certification",
    description: "Ensure secure data transmission for your visitors.",
    icon: <LockClosedIcon aria-hidden="true" className="h-6 w-6 text-white" />,
  },
  {
    name: "SEO Optimization",
    description: "Improve your visibility and attract more visitors.",
    icon: <MagnifyingGlassIcon class="h-6 w-6 text-white" />,
  },
  {
    name: "Robust Security Measures",
    description: "Protect your website from cyber threats.",
    icon: <FingerPrintIcon aria-hidden="true" className="h-6 w-6 text-white" />,
  },
];
