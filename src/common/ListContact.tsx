import { FacebookIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export const socials = [
  {
    id: 1,
    link: "https://github.com/phamlam2k",
    name: "GitHub",
    svg: <GitHubIcon />,
  },
  {
    id: 2,
    link: "https://www.facebook.com/phamlam2k",
    name: "Facebook",
    svg: <FacebookIcon />,
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/mai-l%C3%A2m-ph%E1%BA%A1m-08857a192/",
    name: "LinkedIn",
    svg: <LinkedInIcon />,
  },
  {
    id: 4,
    link: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mailam1309@gmail.com",
    name: "Gmail",
    svg: <MailIcon />,
  },
];

export const ListContact = () => {
  return (
    <div className="list-contact">
      <div className="list-contact-content">
        {socials.map((social) => (
          <a
            target="_blank"
            href={social.link}
            key={social.id}
            className="header_social"
            rel="noreferrer"
          >
            <div className="header_social-text">{social.name}</div>
            <div className="header_social-svg">{social.svg}</div>
          </a>
        ))}
      </div>
    </div>
  );
};
