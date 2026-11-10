const users = [
  { userName: 'John Due', id: '_554604' },
  { userName: 'Bob Jane', id: '_758486' },
  { userName: 'Alice Smith', id: '_602381' },
]

export default function Page() {
  return (
    <div>
      { users.map((user) => (
        <div key={ user.id }>{ user.userName }</div>
      )) }
    </div>
  )
}