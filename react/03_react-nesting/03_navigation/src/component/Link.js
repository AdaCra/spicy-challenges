export const Link = ({ address, children }) => {
    return (
      <a className="navigation__link" href={address}>
        {children}
      </a>
    );
  };