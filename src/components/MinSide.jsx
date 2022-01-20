import { Container, GroupIcon, Group, Button } from '../styles/minside.styled'
import { BiMessageSquareAdd } from 'react-icons/all'
const MinSide = () => {
  const groups = [
    {
      name: 'flutter',
      url: '/images/flutter.svg',
      className: 'active',
    },
    {
      name: 'Behance',
      url: '/images/behance.svg',
      className: '',
    },
    {
      name: 'twitter',
      url: '/images/twitter.svg',
      className: '',
    },
    {
      name: 'whatsapp',
      url: '/images/whatsapp.svg',
      className: '',
    },
    {
      name: 'discord',
      url: '/images/discord.svg',
      className: '',
    },
  ]

  return (
    <Container>
      {groups.map((item, i) => (
        <Group key={i} className={item.className}>
          <GroupIcon src={item.url} alt={item.name} />
        </Group>
      ))}
      <Button>
        <BiMessageSquareAdd />
      </Button>
    </Container>
  )
}

export default MinSide
