import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export const Navbar = () => {
	return (
		<nav className="flexBetween max-container padding-container relative z-30 py-5">
			<Link href="/">
				<Image src="/camptraveler.png" alt="logo" width={148} height={58} />
			</Link>

			<ul className="hidden h-full gap-12 lg:flex">
				{NAV_LINKS.map((link) => (
					<Link
						href={link.href}
						key={link.key}
						className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
					>
						{link.label}
					</Link>
				))}
			</ul>

			<div className="lg:flexCenter hidden">
				<Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
			</div>

			<details className="dropdown dropdown-end lg:hidden">
				<summary tabIndex={0} role="button" className="btn m-1">
					<Image
						src="menu.svg"
						alt="menu"
						width={32}
						height={32}
						className="inline-block cursor-pointer lg:hidden"
					/>
				</summary>
				<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border">
					{NAV_LINKS.map((link) => (
						<li key={link.key}>
							<a>{link.label}</a>
						</li>
					))}
				</ul>
			</details>
		</nav>
	);
};
