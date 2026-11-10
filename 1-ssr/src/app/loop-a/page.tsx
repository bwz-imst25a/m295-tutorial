const users = [
  { userName: 'John Due', id: '_554604' },
  { userName: 'Bob Jane', id: '_758486' },
  { userName: 'Alice Smith', id: '_602381' },
]

export default function Page() {
  function renderUsers() {
    const usersRendered = []
    for (let i = 0; i < users.length; i++) {
      usersRendered.push(<div key={ users[i].id }>{ users[i].userName }</div>)
    }
    return usersRendered
  }

  return <div>{ renderUsers() }</div>
}