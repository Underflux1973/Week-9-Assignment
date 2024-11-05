import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/sign_up">Sign Up</Link>
        <Link href="/sign_in">Sign In</Link>
        <Link href="/new_post">Post Your Dead Hobby</Link>
        <Link href="/create_edit_profile">Create/Edit Profile</Link>
      </nav>
    </>
  );
}
