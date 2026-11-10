export default function Page() {
  const altText = 'Profile image'
  const userName = 'John Due'
  const size = 100

  return (
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/User_Avatar.png"
         alt={ `${altText} of ${userName}` }
         title={ altText }
         width={ size }
         height={ size } />
  )
}