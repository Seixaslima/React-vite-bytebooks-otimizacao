import { Book } from '../../store/reducers/books'
import BookItem from '../BookItem'

export default function BookList({ itens }: { itens: Book[] }) {
  return (
    <>
      {itens.map((book) => (
        <BookItem book={book} />
      ))}
    </>
  )
}
