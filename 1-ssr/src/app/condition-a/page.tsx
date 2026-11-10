export default function Page() {
  const userName: string | null = 'John Due' // e.g., get user name from db

  function renderWelcomeMessage() {
    if (userName !== null) {
      return <span>Welcome { userName }!</span>
    } else {
      return <span>Please log in…</span>
    }
  }

  return (
    <span>{ renderWelcomeMessage() }</span>
  )
}