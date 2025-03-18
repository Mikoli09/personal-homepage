import { SocialsList, SocialsItem } from "../styled"
import { socials } from "../data/socials"
import { Link } from "../styled"

export const Socials = () => {


    return (
        <SocialsList>
            {socials.map(({ name, url, Icon }) => (
                <SocialsItem key={name}>
                    <Link
                    href={url}
                    title={name}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <Icon />
                    </Link>
                </SocialsItem>
            ))}
        </SocialsList>
    )
};