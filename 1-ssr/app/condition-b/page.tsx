export default function Page() {
  const userName: string | null = 'John Due' // e.g., get user name from db

  return (
    <span>
      { (userName !== null) ? (
        <span>Welcome { userName }!</span>
      ) : (
        <span>Please log in…</span>
      ) }
    </span>
  )
}