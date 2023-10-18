import {
  DeviceArrowIcon,
  DeviceCardsIcon,
  DeviceClockIcon,
  DeviceListIcon,
  DeviceLockIcon,
  DeviceChartIcon,
} from "@/components/StockLogos";




export const navData = [
    { _id: 101, title: "Home", href: "#home" },
    { _id: 102, title: "Features", href: "#features" },
    { _id: 103, title: "Account", href: "#account" },
    { _id: 104, title: "Reviews", href: "#reviews" },
  ];
  export const accountData = [
    {
      name: "Invest any amount",
      description:
        "Whether it is $1 or $1,000,000, we can put your money to work for you.",
      icon: DeviceArrowIcon,
    },
    {
      name: "Build a balanced profile",
      description:
        "Invest in different industries to find the most opportunities to win huge.",
      icon: DeviceCardsIcon,
    },
    {
      name: "Trade in real-time",
      description:
        "Get insider tips on big stock moves and act on them within seconds.",
      icon: DeviceClockIcon,
    },
    {
      name: "Profit from your network",
      description:
        "Invite new insiders to get tips faster and beat even other Investa users.",
      icon: DeviceListIcon,
    },
    {
      name: "Encrypted and anonymized",
      description:
        "Cutting-edge security technology that even the NSA does not know about keeps you hidden.",
      icon: DeviceLockIcon,
    },
    {
      name: "Progress tracking",
      description:
        "Watch your investments grow exponentially, leaving other investors in the dust.",
      icon: DeviceChartIcon,
    },
  ];