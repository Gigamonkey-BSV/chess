import MoneyButton from '@moneybutton/react-money-button'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link';

const Index = () => {
  const router = useRouter()
  const { pid } = router.query

  // TODO check that pid is a bitcoin address.
  // TODO check for address in our database.
  // if the address is associated with a game in the abstract,
  // display open games.
  // if the address is associated with a specific game in progress or that has completed,
  // display that game.

  return <div>
    <Head><title>Gigamonkey Chess</title></Head>
    <p>Gigamonkey Chess</p>
    <p>Send a tip to the emperor!</p>
    <MoneyButton
      to="emperor@moneybutton.com"
      amount="1"
      currency="USD"
    />
  </div>
};

export default Index;
