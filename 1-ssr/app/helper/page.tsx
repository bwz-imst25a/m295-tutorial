export default function Page() {
  const helloMessage = 'Hello World'

  function renderMessage() {
    return <h1>{helloMessage}</h1>
  }

  return (
    <>
      {renderMessage()}
      <p>Today is: {new Date().toLocaleDateString()}</p>
    </>
  )
}