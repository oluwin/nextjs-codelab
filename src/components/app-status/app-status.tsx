import { Badge } from '@/components/badge'

interface AppStatusProps {
  status: string
}
export const AppStatus = ({ status }: AppStatusProps) => {
  if (status === 'completed') {
    return <Badge size='sm' variant="success">{'Successful'}</Badge>
  }

  if (status === 'rejected') {
    return <Badge size='sm' variant="danger">{'Rejected'}</Badge>
  }

  if (status === 'pending') {
    return (
      <Badge size='sm' variant="warning">
        {'Pending'}
      </Badge>
    )
  }

  return <Badge variant="inverse">{'Unknown Status'}</Badge>
}

interface TypeProps {
  type: string
}
export const TransactionType = ({ type }: TypeProps) => {
  if (type === 'deposit') {
    return <Badge size='sm' variant="success">{'Deposit'}</Badge>
  }

  if (type === 'withdraw') {
    return <Badge size='sm' variant="default">{'Withdrawal'}</Badge>
  }

  if (type === 'transfer') {
    return <Badge size='sm' variant="danger">{'Transfer'}</Badge>
  }

  if (type === 'redeem') {
    return <Badge size='sm' variant="inverse">{'Redeem'}</Badge>
  }

  if (type === 'giveaway') {
    return (
      <Badge size='sm' variant="warning">
        {'Giveaway'}
      </Badge>
    )
  }

  return <Badge variant="default">{type}</Badge>
}

interface GiveAwayStatusProps {
  status: string
}
export const GiveAwayStatus = ({ status }: GiveAwayStatusProps) => {
  if (status === 'started') {
    return <Badge size='sm' variant="success">{'Started'}</Badge>
  }

  if (status === 'ended') {
    return <Badge size='sm' variant="danger">{'Ended'}</Badge>
  }

  if (status === 'progress') {
    return (
      <Badge size='sm' variant="warning">
        {'Progress'}
      </Badge>
    )
  }

  return <Badge variant="inverse">{'Unknown Status'}</Badge>
}