import { useRouter } from 'next/router';
import Link from 'next/link';
import { ReactNode } from 'react';
import styles from '@/styles/Header.module.scss';

ActiveLink.defaultProps = {
    exact: false
};

interface ActiveLinkProps {
    href: string
    exact?: boolean
    children: ReactNode,
    className: string
};

export default function ActiveLink({ href, exact, children, ...props }: ActiveLinkProps) {
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