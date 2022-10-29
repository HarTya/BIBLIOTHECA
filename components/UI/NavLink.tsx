import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '@/styles/Header.module.scss';
import { NavLinkProps } from '../interfaces';

function NavLink({ href, exact = false, children, ...props }: NavLinkProps) {
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