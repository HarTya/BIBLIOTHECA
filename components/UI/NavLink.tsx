import { useRouter } from 'next/router';
import Link from 'next/link';
import { ReactNode } from 'react';
import styles from '@/styles/Header.module.scss';

NavLink.defaultProps = {
    exact: false
};

interface NavLinkProps {
    href: string
    exact?: boolean
    children: ReactNode,
    className: string
};

function NavLink({ href, exact, children, ...props }: NavLinkProps) {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive) {
        props.className += ` ${styles.header_links_link_active}`;
    }

    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    );
}

export default NavLink;