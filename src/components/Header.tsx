const Header = () => (
  <header className="flex items-center justify-center bg-primary">
    <picture>
      <img
        className="w-screen md:hidden"
        alt="bannerMobile"
        src="./images/bg-header-mobile.svg"
      />
      <img
        className="hidden w-screen md:block"
        alt="bannerMobile"
        src="./images/bg-header-desktop.svg"
      />
    </picture>
  </header>
)

export default Header
